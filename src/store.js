import { writable } from 'svelte/store';

export const UserRollNo = writable('rollno');
export const isSignedIn = writable(false);
export const choosenAnswer = writable('answer');
export const score = writable(0);
export const questionIndex = writable(0);
export const totalCoreectQuestions = writable(0);
export const totalQuestions = writable(0);
