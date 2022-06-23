import markdownStyles from '../markdown-styles.module.css';

export default function PetitionBody({ content }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={markdownStyles['markdown'] + markdownStyles['petitions']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
