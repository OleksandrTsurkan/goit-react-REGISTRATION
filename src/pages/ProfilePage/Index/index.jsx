import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from 'store/auth/selector';
import { updateProfileThunk } from 'store/auth/thunks';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (profile) {
      setValue('firstName', profile.firstName);
      setValue('lastName', profile.lastName);
    }
  }, [profile, setValue]);

  return (
    <form
      onSubmit={handleSubmit(data =>
        dispatch(updateProfileThunk({ body: data, id: profile._id }))
      )}
    >
      <div className="mb-3">
        <label htmlFor="exampleInputFirstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputFirstName"
          {...register('firstName')}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputLastName" className="form-label">
          Second Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputLastName"
          {...register('lastName')}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  );
};

export default ProfilePage;
