import React from 'react';

import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.action';

import ProfileForm from '@/components/forms/profile-form';
import { ParamsProps } from '@/types';

const EditProfilePage = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;

  const mongoUser = await getUserById({ userId });

  return (
    <>
      <div>
        <h1 className='h1-bold text-dark100_light900'>Edit Profile</h1>
        <div className='mt-9'>
          <ProfileForm clerkId={userId} userDetails={JSON.stringify(mongoUser)} />
        </div>
      </div>
    </>
  );
};

export default EditProfilePage;
