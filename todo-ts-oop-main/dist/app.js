import express from 'express';
import router from './routes/todos.js';
const app = express();
app.use(express.json());
app.use('/todos', router);
app.listen(3001, () => {
    console.log("Server up");
});
//# sourceMappingURL=app.js.map