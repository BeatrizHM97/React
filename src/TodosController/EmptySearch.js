import './TodosController.css';

function EmptySearch({searchText}) {
  return (
    <div className='condition-message'>
      <p>No hay resultados para {searchText}</p>
      <img src="react-project/./img/not-found.png" alt='empty'/>
    </div>
  );
}

export { EmptySearch };