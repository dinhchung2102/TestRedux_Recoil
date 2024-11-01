// recoil.js
import { atom, selector } from 'recoil';

// Định nghĩa atom để lưu trữ danh sách todos
export const todosAtom = atom({
  key: 'todosAtom',
  default: [], // Giá trị mặc định là mảng rỗng
});

// Selector để gọi API và lấy danh sách todos
export const todosSelector = selector({
  key: 'todosSelector',
  get: async ({ get }) => {
    try {
      const response = await fetch("https://66f620da436827ced9760024.mockapi.io/todo/test1/todoList");
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      return data; // Trả về mảng tasks
    } catch (error) {
      console.error(error);
      throw error; // Ném lỗi ra ngoài để có thể xử lý
    }
  },
});
