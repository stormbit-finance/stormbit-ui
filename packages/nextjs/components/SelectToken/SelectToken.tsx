import React from "react";
import { users } from "./data";
import { Avatar, Select, SelectItem } from "@nextui-org/react";

export default function SelectToken() {
  return (
    <Select items={users} label="Assigned to" placeholder="Select a user" labelPlacement="outside" className="max-w-xs">
      {user => (
        <SelectItem key={user.id} textValue={user.name}>
          <div className="flex items-center gap-2">
            <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
            <div className="flex flex-col">
              <span className="text-small">{user.name}</span>
              <span className="text-tiny text-default-400">{user.email}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
