type Params = { params: { id: string } };

export default function Page({ params }: Params) {
  return <h1>특정 {params.id} 다이닝 상세 페이지</h1>;
}
