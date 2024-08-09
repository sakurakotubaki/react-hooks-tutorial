import styled from 'styled-components';

// 角丸のカードスタイル
const Card = styled.div`
  margin: 1em;
  padding: 1em;
  background: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

// カードのタイトルスタイル
const CardTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

// カードの内容スタイル
const CardContent = styled.p`
  font-size: 1em;
  color: #666;
`;

const CardStyle = () => {
  // ダミーのObject3件を作成
  const data = [
    { id: 1, title: 'Title1', content: 'Content1' },
    { id: 2, title: 'Title2', content: 'Content2' },
    { id: 3, title: 'Title3', content: 'Content3' }
  ];

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id}>
          <CardTitle>{item.title}</CardTitle>
          <CardContent>{item.content}</CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CardStyle