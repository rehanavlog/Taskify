    import { configureStore } from '@reduxjs/toolkit';
    import taskReducer from '../features/tasks/taskSlice';
    import counterReducer from '../features/tasks/counterSlice';

    export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        counter: counterReducer,
    },
    });

    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;
