const setCategoryMock = vi.fn();
const categorySelectedMock = [
  {
    category: "Linguagens",
    fieldStudy: ["Português", "Inglês", "Espanhol"],
    language: "pt",
    options: ["Dente", "Cérebro", "Olho", "Nariz"],
    question: "Qual é a palavra em português que significa 'tooth' em inglês?",
  },
];

export const mockedCategorySelected = {
  categorySelected: categorySelectedMock,
  setCategorySelected: setCategoryMock,
};
