import { useState } from 'react';
import toast from 'react-hot-toast';
// import { updateSetting as updateSettingApi } from '../../../services/apiSettings';
import { useCurrentUser } from '../../authentication/hooks/useCurrentUser';

export function useUpdateSetting() {
  const { isAdmin } = useCurrentUser();
  const [isUpdating, setIsUpdating] = useState(false);

  const updateSetting = async (data) => {
    setIsUpdating(true);
    try {
      if (isAdmin) {
        // await updateSettingApi(data);
        toast.success('Settings successfully updated.');
      } else {
        throw new Error("You don't have permission.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateSetting, isUpdating };
}
