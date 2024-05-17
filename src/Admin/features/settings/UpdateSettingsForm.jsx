import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Spinner from '../../components/ui/Spinner';
import { useGetCategories } from './hooks/useGetCategories';
import { updateRooms } from '../../services/apiSettings';
import toast from 'react-hot-toast';

function UpdateSettingsForm() {
  const [btnDisable, setBtnDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryPrices, setCategoryPrices] = useState({});
  const { categories } = useGetCategories(setIsLoading);

  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  function handleValidate() {
    const isAnyFieldDifferent = categories.some(category => {
      const currentValue = getValues(`category_${category.id}`);
      return category.price !== parseFloat(currentValue);
    });
  
    setBtnDisable(!isAnyFieldDifferent);
  }

  function handleResetForm() {
    reset();
    setCategoryPrices({});
    handleValidate();
  }

  function handlePriceChange(categoryId, price) {
    setCategoryPrices(prevPrices => ({
      ...prevPrices,
      [categoryId]: price,
    }));
  }

  async function onSubmit() {
    setIsLoading(true)
    const updatedCategories = categories.map(category => ({
      id: category.id,
      price: categoryPrices[category.id] || category.price,
    }));

    try {
        await updateRooms(updatedCategories);
        toast.success('Roomss successfully updated.');
    } catch (error) {
      toast.error(error.message);
    }finally{
      setIsLoading(false)
    }
  }
  useEffect(() => {
  }, []);
  if (isLoading) return <Spinner className="mx-auto h-6 w-6" />;

  return (
    <div className="rounded-md border border-gray-200 bg-gray-0 p-6 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className={`${isLoading && 'opacity-50'}`}>
        {categories.map(category => (
          <div key={category.id} className="row flex items-center justify-between mb-4">
            
            <div className='col-6 flex items-center'>
              <img src={category.image} className='h-[100px]'/>
            <div className='ms-md-4 ms-2'>{category.name}</div>
            </div>
            <div className='col-6 flex items-center'>
          <p className='me-2'>£</p>
            <input
              type="number"
              placeholder="Price"
              {...register(`category_${category.id}`)}
              onChange={e => handlePriceChange(category.id, parseFloat(e.target.value))}
              defaultValue={category.price}
              className="border border-gray-300 rounded-md px-3 py-2 w-32 text-sm"
              />
              </div>
          </div>
        ))}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            disabled={btnDisable}
            onClick={handleResetForm}
            className="text-sm font-medium text-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-brand-600 px-3 py-2 text-sm font-medium text-brand-50 shadow-sm transition-all hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-200"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateSettingsForm;
