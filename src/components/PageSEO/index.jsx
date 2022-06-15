import { DefaultSeo } from 'next-seo';

const Page = ({title, description, path, children}) => (
    
  <>
    <DefaultSeo
      title = { title }
      description = { description }
      canonical= {"https://humberto-nascimento.vercel.app" + path}
      openGraph={{
        url: `https://humberto-nascimento.vercel.app${path}`,
        title,
        description,
        locate: 'pt_BR',
        images: [
          {
            url: 'https://humberto-nascimento.vercel.app/_next/image?url=%2Fimages%2Fphoto.jpg&w=384&q=75',
            width: 800,
            height: 600,
            alt: 'Humberto Nascimento',
            type: 'image/jpeg',
          },
        ],
        site_name: 'Humberto Nascimento',
      }}
      
    />
    {children}
  </>
);

export default Page;