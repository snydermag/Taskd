import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { Type } from 'app/shared/model/enumerations/type.model';
import { Category } from 'app/shared/model/enumerations/category.model';

export interface ITask {
  id?: number;
  name?: string | null;
  type?: Type | null;
  category?: Category | null;
  remindDate?: string | null;
  recurringTime?: number | null;
  assignedTo?: IUser | null;
}

export const defaultValue: Readonly<ITask> = {};
