import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
  const meta = {
    title: 'Open Sustainable Organization',
    description: `Research and development to build open models for open sustainable organizations`,
    image: 'https://oso.sx/og.png'
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://oso.sx`} />
        <link rel="canonical" href={`https://oso.sx`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Filippo Benozzi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@filippobenozzi" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <script async defer
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_DOMAIN_ID}
          src={`${process.env.NEXT_PUBLIC_UMAMI_HOST}/umami.js`}
          data-domains="oso.sx"
        />
      </Head>
      <header className="bg-gray-50">
        <div className="h-2 w-full bg-gradient-to-r from-[#cd9cf2] from-[#f5f7fa] to-[#dad4ec]" />
        <nav className="max-w-lg px-8 py-4 md:py-8 mx-auto mb-4 mt-14 flex justify-between">
          <Link href="/">
            <img className="w-24" alt="Open Organization" src="/logo.svg" />
          </Link>
        </nav>
        <section className="max-w-lg p-8 mx-auto pb-8 md:pb-20">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight !leading-[1.25]">
            We research and develop frameworks and principles to build <span className="inline bg-[#dad4ec]">open sustainable organizations</span>
          </h1>
          <p className="text-gray-700 max-w-md text-lg pt-6 mb-4 italic">
            Framework, models and tools to build the next generation organization. Create an open culture, that drive innovation and sustainability.
          </p>
          <Link href="mailto:email@oso.sx" className="font-bold inline-block mt-4 w-auto italic transition border-b-2 border-[#bdc2e8] hover:border-[#cd9cf2]">Join us</Link>
        </section>
      </header>
      <main>
        <section className="m-auto max-w-lg mt-8 px-8 py-4 md:py-12">
          <h2 className="mb-6 text-xl md:text-2xl font-bold tracking-tight">
            Manifesto
          </h2>
          <p className="text-gray-700 mb-4 line leading-7">We are exploring the impact of open source principles on modern, innovative organizational cultures. Our goal is to gain a deeper insight into how these values shape today's business environment. Additionally, we are continuously refining the concept of an "open organization," clarifying how it differs from other management and leadership methodologies. We serve as a reliable guide for those looking to harness open principles to enhance their organizations.</p>
          <p className="text-gray-700 mb-4 line leading-7">Openness is becoming a key factor in how teams of various sizes collaborate to achieve common objectives. Today's most progressive organizations, regardless of their mission, are adopting openness as a vital approach to success. They've observed that openness can lead to:</p>
          <ul className="list-disc pl-4 text-gray-700 mb-4 line leading-7">
            <li>Enhanced agility, with team members working more cohesively towards shared goals and visions.</li>
            <li>Quicker innovation, as ideas from both inside and outside the organization are given fair consideration and prompt experimentation.</li>
            <li>Increased engagement, with members understanding how their individual efforts align with the organization's overarching values, mission, and ethos.</li>
          </ul>
          <p className="text-gray-700 mb-4 line leading-7">While each organization is distinct, we identify five fundamental characteristics that underpin openness in most scenarios: transparency, inclusivity, adaptability and sustainability.</p>
          <h3 className="mb-2 text-l font-bold leading-7">Transparency</h3>
          <p className="text-gray-700 mb-4 line leading-7">In open organizations, transparency is key. They strive to make data and materials easily accessible within legal boundaries, allowing both internal and external participants to review them as needed, fostering inclusivity. Decision-making is transparent so that all affected parties understand the rationale and process behind them, inviting open assessment and collaboration. Work transparency ensures ongoing monitoring and assessment of projects, allowing for observation and potential modifications, emphasizing adaptability.</p>
          <h3 className="mb-2 text-l font-bold leading-7">Inclusivity</h3>
          <p className="text-gray-700 mb-4 line leading-7">Open organizations embrace diverse viewpoints, incorporating various perspectives into dialogues whenever possible. Participation is easy for interested parties and newcomers, without needing explicit permission from stakeholders, enhancing collaboration. Participation rules are clear and adhere to established standards, reinforcing transparency. The essence of open organizations is their communal nature. Shared values and purposes, rather than geographical locations or hierarchies, define participation and organizational boundaries. These core values, open to ongoing revision and critique, are crucial in determining the organization's success or failure.</p>
          <h3 className="mb-2 text-l font-bold leading-7">Adaptability</h3>
          <p className="text-gray-700 mb-4 line leading-7">Flexibility and resilience define open organizations. Their policies and systems allow feedback loops to significantly influence operations, granting participants the ability to adjust their working conditions. Regular and detailed reporting on outcomes encourages adjustments in collective actions, aligned with continuous engagement and learning, and linked to transparency.</p>
          <h3 className="mb-2 text-l font-bold leading-7">Sustainability</h3>
          <p className="text-gray-700 mb-4 line leading-7">Open organization must embrace sustainability to achieve its objectives. This concept of sustainability encompasses sustainable development and business models, as well as the sustainable use of materials and operational practices. Establishing a corporate framework that supports sustainability is essential, not just in terms of physical resources and facilities, but also in management approaches, systems, and internal organization. This holistic approach to sustainability is crucial for the enduring success and longevity of the organization.</p>
        </section>
        <span className="flex m-auto max-w-lg bg-gray-100 h-[1px] w-full" />
        <section className="m-auto max-w-lg mt-4 mb-16 px-8 py-4 md:py-12">
          <div className="flex items-center mt-6">
            <div className="w-full">
              <p className="text-gray-700 mt-4">
                <strong>Filippo Benozzi</strong> <span className='text-sm italic'>— developer, economic student</span>
              </p>
              <a
                href="https://filippo.im"
                className="mt-2 no-underline italic transition border-b-2 border-[#bdc2e8] hover:border-[#cd9cf2] text-sm md:text-base"
              >
                more about me &#187;
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
