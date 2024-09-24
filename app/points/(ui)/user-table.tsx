"use client";

import { Table } from "flowbite-react";
import Image from "next/image";
import React from "react";

const UserTable = ({ users }: { users: Students[] }) => {
  return (
    <div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Class</Table.HeadCell>
          <Table.HeadCell>Gender</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((item, index) => {
            return (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className=" flex items-center space-x-4">
                    <Image
                      src={`/${item.imageUrl}`}
                      width={40}
                      height={40}
                      alt=""
                    />
                    <p className=" text-lg">{`${item.firstname} ${item.lastname}`}</p>
                  </div>
                </Table.Cell>
                <Table.Cell>{item.grade}</Table.Cell>
                <Table.Cell className=" capitalize font-semibold">
                  {item.gender}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default UserTable;
