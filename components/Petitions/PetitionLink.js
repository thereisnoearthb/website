import { useState } from 'react';
import PetitionModal from './PetitionModal';

export default function PetitionLink(petition) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3 className="text-md mb-3 cursor-pointer">
        <i className="bi bi-arrow-right mr-2"></i>
        {petition.redirect ? <a href={petition.link} className="font-bold capitalize hover:underline">{petition.title}</a> : <span className="font-bold capitalize hover:underline" type="button" onClick={() => setShow(true)} data-modal-toggle={"modal-" + [petition.slug]}> {petition.title}</span>}
      </h3>
      <PetitionModal petition={petition} show={show} setShow={setShow} />
    </div >
  );
}
