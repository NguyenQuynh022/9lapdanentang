import Story from '../models/Story';

export default class StoryBrain {
  private _storyNumber: number = 0;

  private _storyData: Story[] = [
    new Story(
      'Kiếp trước, Lâm Uyển Nhi bị vị hôn phu ruồng bỏ, em gái vu oan và chết trong biển lửa. Tỉnh lại ba năm trước, nàng nhận được thư báo em gái sắp hãm hại mẹ mình.',
      'Đến tiệc đính hôn đối chất.',
      'Về phủ tìm chứng cứ.'
    ),
    new Story(
      'Sổ thuốc của mẹ có dấu hiệu bị sửa. Uyển Nhi tìm được chứng cứ, nhưng tiệc đính hôn đã bắt đầu.',
      'Mang chứng cứ đến buổi tiệc.',
      'Đưa mẹ rời khỏi kinh thành.'
    ),
    new Story(
      'Tạ Cảnh Thâm đứng cạnh em gái nàng. Kiếp trước, Uyển Nhi nổi giận và bị vu là điên. Lần này, nàng đã có chứng cứ trong tay.',
      'Công bố sự thật trước mọi người.',
      'Im lặng nhận lỗi thay em gái.'
    ),
    new Story(
      'Uyển Nhi đưa mẹ rời kinh thành, bắt đầu cuộc sống bình yên. Lần trùng sinh này, nàng chọn tự do thay vì trả thù. (KẾT THÚC 1)',
      'Chơi lại từ đầu',
      ''
    ),
    new Story(
      'Uyển Nhi im lặng nhận lỗi. Tạ Cảnh Thâm hủy hôn, em gái nàng trở thành vị hôn thê mới. Bi kịch lại bắt đầu. (KẾT THÚC 2)',
      'Chơi lại từ đầu',
      ''
    ),
    new Story(
      'Uyển Nhi đưa ra chứng cứ, vạch trần âm mưu. Nàng trả nhẫn đính hôn, rời đi và tự chọn tương lai của mình. (KẾT THÚC 3)',
      'Chơi lại từ đầu',
      ''
    ),
  ];

  public getStory(): string {
    return this._storyData[this._storyNumber].storyTitle;
  }

  public getChoice1(): string {
    return this._storyData[this._storyNumber].choice1;
  }

  public getChoice2(): string {
    return this._storyData[this._storyNumber].choice2;
  }

  // Điều hướng phân nhánh cốt truyện theo chỉ số
  public nextStory(choiceNumber: 1 | 2): void {
    if (this._storyNumber === 0) {
      this._storyNumber = choiceNumber === 1 ? 2 : 1;
    } else if (this._storyNumber === 1) {
      this._storyNumber = choiceNumber === 1 ? 2 : 3;
    } else if (this._storyNumber === 2) {
      this._storyNumber = choiceNumber === 1 ? 5 : 4;
    } else if (this._storyNumber >= 3) {
      this.restart();
    }
  }

  public restart(): void {
    this._storyNumber = 0;
  }

  // Ở các story kết thúc (3, 4, 5), chỉ còn lựa chọn "Chơi lại", ẩn Choice 2
  public buttonShouldBeVisible(): boolean {
    return this._storyNumber < 3;
  }
}