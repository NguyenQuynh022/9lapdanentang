export default class Question {
  text: string;
  answer: boolean;
  category: string;
  imageUrl: string;
  explanation: string;

  constructor(
    text: string,
    answer: boolean,
    category: string,
    imageUrl: string,
    explanation: string
  ) {
    this.text = text;
    this.answer = answer;
    this.category = category;
    this.imageUrl = imageUrl;
    this.explanation = explanation;
  }
}
