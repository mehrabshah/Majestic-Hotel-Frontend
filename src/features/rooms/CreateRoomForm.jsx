import { useForm } from 'react-hook-form';
import { useCreateRoom } from './hooks/useCreateRoom';
import { useEditRoom } from './hooks/useEditRoom';

function CreateRoomForm({ editRoomProps = {}, onCloseModal }) {
  const { createRoom, isCreating } = useCreateRoom();
  const { editRoom, isEditing } = useEditRoom();
  const isWorking = isCreating || isEditing;

  const { id: editRoomId, ...editRoomValues } = editRoomProps;
  // If we click "edit room" then this will become true
  const isEditRoomSession = Boolean(editRoomId);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: isEditRoomSession ? editRoomValues : {},
  });

  function onSubmit(data) {
    const image =
      typeof data.roomImage === 'string'
        ? data.roomImage
        : data.roomImage[0];

    if (isEditRoomSession)
      editRoom(
        { data: { ...data, roomImage: image }, id: editRoomId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createRoom(
        { ...data, roomImage: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${isWorking && 'opacity-50'} w-[750px]`}
    >
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-gray-900/10 pb-6">
        <div>
          <label htmlFor="roomName">Room name</label>
          <div className="mt-2">
            <input
              type="text"
              id="roomName"
              {...register('roomName', {
                required: 'Name cannot be kept empty',
              })}
            />
          </div>
          {errors.roomName && (
            <p className="mt-2 text-sm text-red-700">
              {errors.roomName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <div className="mt-2">
            <input
              type="number"
              id="maxCapacity"
              {...register('maxCapacity', {
                required: 'Capacity cannot be kept empty',
                min: {
                  value: 1,
                  message: 'Capacity should be at least one',
                },
              })}
            />
          </div>
          {errors.maxCapacity && (
            <p className="mt-2 text-sm text-red-700">
              {errors.maxCapacity.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="regularPrice">Regular price</label>
          <div className="mt-2">
            <input
              type="number"
              id="regularPrice"
              {...register('regularPrice', {
                required: 'Price cannot be kept empty',
                min: {
                  value: 1,
                  message: 'Price should be at least one',
                },
              })}
            />
          </div>
          {errors.regularPrice && (
            <p className="mt-2 text-sm text-red-700">
              {errors.regularPrice.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="discount">Discount</label>
          <div className="mt-2">
            <input
              type="number"
              id="discount"
              {...register('discount', {
                required: 'Discount cannot be kept empty',
                validate: (value) =>
                  +value <= +getValues().regularPrice ||
                  'Discount should be less than regular price',
              })}
            />
          </div>
          {errors.discount && (
            <p className="mt-2 text-sm text-red-700">
              {errors.discount.message}
            </p>
          )}
        </div>

        <div className="col-span-2">
          <label htmlFor="description">Description for website</label>
          <div className="mt-2">
            <textarea
              id="description"
              rows={3}
              {...register('description', {
                required: 'Description cannot be kept empty',
              })}
            />
          </div>
          {errors.description && (
            <p className="mt-2 text-sm text-red-700">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="col-span-2 flex items-center gap-x-12">
          <label htmlFor="roomImage">Room image</label>
          <div>
            <input
              type="file"
              id="roomImage"
              accept=".jpg, .jpeg, .png"
              {...register('roomImage', {
                validate: (fileData) => {
                  if (typeof fileData === 'string' || fileData.length > 0)
                    return true;
                  return 'Image cannot be kept empty';
                },
              })}
            />
          </div>
          {errors.roomImage && (
            <p className="text-sm text-red-700">{errors.roomImage.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="reset"
          disabled={isWorking}
          onClick={() => onCloseModal?.()}
          className="text-sm font-medium text-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isWorking}
          className="rounded-md bg-brand-600 px-3 py-2 text-sm font-medium text-brand-50 shadow-sm transition-all hover:bg-brand-700 disabled:bg-brand-200"
        >
          {isEditRoomSession ? 'Save room' : 'Upload room'}
        </button>
      </div>
    </form>
  );
}

export default CreateRoomForm;
