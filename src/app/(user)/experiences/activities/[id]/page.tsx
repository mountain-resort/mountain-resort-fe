type Params = { params: { id: string } };

export default function Page({ params }: Params) {
  return <h1>특정 {params.id} 어드벤쳐(액티비티) 상세 페이지</h1>;
}
