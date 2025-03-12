'use client';
import { Button } from '@/components/ui/button';
import { Card, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

function RegisterReffer() {
  return (
    <Card className="!w-full mb-12 sm:mb-16 md:mb-28  sm:!p-12 md:!p-16 !rounded-2xl bg-gradient-var2 shadow-lg">
      <div className="text-center  w-full max-w-screen-lg mx-auto flex flex-col items-center gap-6">
        <div className="w-full ">
          <h1 className="!text-white text-xl sm:text-3xl md:text-4xl font-semibold">
            Unlock your Business Potential with Sampli!
          </h1>
          <Text className="!text-white text-sm sm:text-base md:text-lg mt-2 tracking-wide max-w-2xl mx-auto block leading-relaxed">
            Join our platform today and connect with engaged samplers eager to
            review your products. Create impactful campaigns, gather valuable
            insights, and boost your sales—all in one place.
          </Text>
        </div>
        <Button className="bg-white text-[#2E78E9] px-6 py-3 text-sm sm:text-base md:text-lg rounded-lg font-medium">
          Register Now
        </Button>
      </div>
    </Card>
  );
}

export default RegisterReffer;
