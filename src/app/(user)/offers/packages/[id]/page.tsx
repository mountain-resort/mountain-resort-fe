type Params = { params: { id: string } };

export default function Page({ params }: Params) {
  return <h1>특정 패키지 {params.id} 상세 페이지</h1>;
}
