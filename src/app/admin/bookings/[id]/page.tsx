type Params = { params: { id: string } };

export default function Page({ params }: Params) {
  return <h1>특정 {params.id} 예약 상세 페이지</h1>;
}
