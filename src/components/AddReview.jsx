import { FaPlus } from 'react-icons/fa'; // Importa el ícono de "+" de react-icons

const AddReviewButton = () => {
  return (
    <div className="fixed bottom-10 right-10">
      <button
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        title="Agregar nueva reseña"
      >
        <FaPlus className="text-3xl" />
      </button>
    </div>
  );
};

export default AddReviewButton;