import Head from 'next/head';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>ACME Demo</title>
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to ACME</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.map((item) => (
            <Card key={item.id} title={item.title} description={item.body} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      data: data.slice(0, 6), // Rajoitetaan dataa kuuteen ensimmäiseen alkioon
    },
  };
}
