import Question from '../models/Question';

const image = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

export default class QuizBrain {
  private _questionNumber = 0;
  private _questionBank: Question[] = [
    new Question(
      'Mặt trăng tự phát sáng giống như một ngôi sao.',
      false,
      'VŨ TRỤ',
      image('photo-1519681393784-d120267933ba'),
      'Mặt trăng không tự phát sáng; ta nhìn thấy ánh sáng mặt trời phản chiếu trên bề mặt của nó.'
    ),
    new Question(
      'Thái Bình Dương là đại dương lớn nhất trên Trái Đất.',
      true,
      'ĐỊA LÝ',
      image('photo-1518837695005-2083093ee353'),
      'Thái Bình Dương rộng hơn tất cả các đại dương khác và bao phủ khoảng một phần ba bề mặt Trái Đất.'
    ),
    new Question(
      'Bạch tuộc có ba trái tim.',
      true,
      'ĐỘNG VẬT',
      image('photo-1545670723-196ed0954986'),
      'Hai trái tim bơm máu đến mang, còn trái tim thứ ba bơm máu đi khắp cơ thể.'
    ),
    new Question(
      'Kim tự tháp Giza nằm ở Hy Lạp.',
      false,
      'KỲ QUAN',
      image('photo-1539650116574-75c0c6d73f6e'),
      'Quần thể kim tự tháp Giza nằm ở Ai Cập, gần thủ đô Cairo.'
    ),
    new Question(
      'Sao Kim là hành tinh nóng nhất trong hệ Mặt Trời.',
      true,
      'VŨ TRỤ',
      image('photo-1462331940025-496dfbfc7564'),
      'Dù không phải hành tinh gần Mặt Trời nhất, bầu khí quyển dày của Sao Kim giữ nhiệt rất mạnh.'
    ),
    new Question(
      'Cá voi xanh là loài động vật lớn nhất từng được biết đến.',
      true,
      'ĐỘNG VẬT',
      image('photo-1568430462989-44163eb1752f'),
      'Cá voi xanh có thể dài hơn 30 mét và nặng tới khoảng 200 tấn.'
    ),
    new Question(
      'Sa mạc Sahara nằm ở Nam Mỹ.',
      false,
      'ĐỊA LÝ',
      image('photo-1509316785289-025f5b846b35'),
      'Sahara nằm ở Bắc Phi và là một trong những sa mạc nóng lớn nhất thế giới.'
    ),
    new Question(
      'Tre thuộc họ cỏ, không phải họ cây thân gỗ.',
      true,
      'THIÊN NHIÊN',
      image('photo-1511497584788-876760111969'),
      'Tre là một nhóm cỏ lớn; thân tre hóa gỗ nhưng về phân loại vẫn thuộc họ Hòa thảo.'
    ),
  ];

  public getCurrentQuestion(): Question {
    return this._questionBank[this._questionNumber];
  }

  public getQuestionNumber(): number {
    return this._questionNumber;
  }

  public isFinished(): boolean {
    return this._questionNumber >= this._questionBank.length - 1;
  }

  public nextQuestion(): void {
    if (!this.isFinished()) {
      this._questionNumber++;
    }
  }

  public reset(): void {
    this._questionNumber = 0;
  }

  public getTotalQuestions(): number {
    return this._questionBank.length;
  }
}
