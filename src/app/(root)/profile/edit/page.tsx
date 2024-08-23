import React from 'react';

import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.action';

import ProfileForm from '@/components/forms/profile-form';
import { ParamsProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Profile | Dev Overflow',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

const EditProfilePage = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;

  const mongoUser = await getUserById({ userId });

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'>Edit Profile</h1>

        <div className='mt-9'>
          <ProfileForm clerkId={userId} userDetails={JSON.stringify(mongoUser)} />
        </div>
      </div>
    </>
  );
};

export default EditProfilePage;
