const Description = ({ des }) => {
  if (!des) return null;

  return (
    <div
      className='w-full mb-0.5 pl-6 prose prose-p:m-0 prose-strong:m-0 prose-em:m-0 prose-em:p-0 prose-ul:pl-0 prose-li:pl-0 prose-ul:my-0 prose-li:my-0 prose-li:mr-0 prose-li:text-black prose-li:marker:text-black prose-li:font-noto leading-tight text-sm min-w-fit'
      dangerouslySetInnerHTML={{ __html: des }}
    />
  );
};

export default Description;
