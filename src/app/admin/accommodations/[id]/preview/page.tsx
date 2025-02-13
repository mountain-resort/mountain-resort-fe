type Params = { params: { id: string } };

export default function Page({ params }: Params) {
  return <h1>특정 {params.id} 숙박 미리 보기 페이지</h1>;
}
