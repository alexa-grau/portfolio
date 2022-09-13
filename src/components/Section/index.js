import './section.css';

function Section(args) {
  let centered='';
  if(args.center){centered='text-center';}
  return (
    <section id={args.id} className={centered}>
      <span>{args.intro}</span>
      <h2 className='mb-4'>{args.title}</h2>
      {args.content}
    </section>
  );
}

export default Section;