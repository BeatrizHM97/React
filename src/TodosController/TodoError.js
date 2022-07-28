import './TodosController.css';

function TodoError() {
    return (
        <div className='condition-message'>
            <p>Lo sentimos, hubo un error...</p>
            <img src="./img/error.png" alt='error'/>
        </div>
    );
}

export { TodoError };