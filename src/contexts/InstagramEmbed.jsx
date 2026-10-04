const InstagramEmbed = ({ url, title = 'Publicação do Instagram' }) => {
  // Extrai o código do post da URL
  const postId = url.split('/').filter(Boolean).pop();

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md lg:max-w-2xl">
        <iframe
          src={`https://www.instagram.com/p/${postId}/embed`}
          className="w-full h-96 md:h-[500px] rounded-lg shadow-lg border border-gray-200"
          frameBorder="0"
          scrolling="yes"
          allowTransparency="true"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    </div>
  );
};

export default InstagramEmbed;