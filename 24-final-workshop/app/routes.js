import { HomePage } from "./scenes/home";
import { LoginPage } from "./scenes/login";
import { NotFound } from "./scenes/not-found";
import { Register } from "./scenes/register";
import { TaskPage } from "./scenes/task";

export const routes = {
    public: [
        { path: '/', scenes: HomePage},
        { path: '/not-found', scenes: NotFound },
        { path: '/register', scenes: Register},
        { path: '/login', scenes: LoginPage}

    ],
    private: [
        {path: '/task', scenes: TaskPage}
    ]
}