import { Collapse } from 'antd';
import React from 'react';

function FrequentlyAskedQuestions() {
  const text = (
    <p
      style={{
        paddingInlineStart: 24,
      }}
    >
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  const items = [
    {
      key: '1',
      label: (
        <span className="text-xl !user-select-none">
          How does the free trial work?
        </span>
      ),
      children: text,
    },
    {
      key: '2',
      label: <span className="text-xl">How does the free trial work?</span>,
      children: text,
    },
    {
      key: '3',
      label: <span className="text-xl">How does the free trial work?</span>,
      children: text,
    },
    {
      key: '4',
      label: <span className="text-xl">How does the free trial work?</span>,
      children: text,
    },
  ];
  return (
    <div className="flex items-start lg:flex-row flex-col px-4 py-4 justify-between gap-12">
      <div className="flex-1">
        <h6>FAQ</h6>
        <h1 className="text-4xl font-bold">Commonly asked questions</h1>
        <p className="text-xl text-[var(--text-gray-100)]">
          Our FAQ section provides clear answers to common inquiries about using
          our platform, creating campaigns, and engaging with samplers.
        </p>
      </div>
      <div className="!w-full lg:flex-1">
        <Collapse
          accordion
          className="!bg-[#f8f8f8]"
          style={{ width: '100%' }}
          items={items}
          bordered={false}
          defaultActiveKey={['1']}
        />
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
