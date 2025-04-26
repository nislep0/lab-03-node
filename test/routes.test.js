const request = require('supertest');
const app = require('../src/index');
const { connectDB, getDB } = require('../src/db');

let createdTaskId;

beforeAll(async () => {
    await connectDB();
});

afterAll(async () => {
    const db = getDB();
    await db.collection('tasks').deleteMany({});
});

describe('Task API', () => {
    it('Should return empty array at start', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(0);
    });

    it('Should create a new task', async () => {
        const task = { title: 'new task' };
        const res = await request(app).post('/api/tasks').send(task);
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe(task.title);
        expect(res.body._id).toBeDefined();
        createdTaskId = res.body._id;
    });

    it('Should delete the created task', async () => {
        const res = await request(app).delete(`/api/tasks/${createdTaskId}`);
        expect(res.statusCode).toBe(204);
        const check = await request(app).get('/api/tasks');
        const found = check.body.find(t => t._id === createdTaskId);
        expect(found).toBeUndefined();
    });
});
