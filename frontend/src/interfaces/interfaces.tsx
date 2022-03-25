interface WorkingTimeAPI {
  data: {
    id: number;
    worker: WorkersAPI;
    order: OrdersAPI;
    work_day: WorkDayApi;
  }[];
}

interface WorkDayApi {
  id: number;
  date: string;
  date_formated: string;
}

interface WorkersAPI {
  id: number;
  name: string;
  surname: string;
  hourly_salary: number;
  taxes_amount_per_hour: number;
}

interface OrdersAPI {
  id: number;
  name: string;
  location: string;
  starting_at: string | null;
  began_at: string | null;
  ended_at: string | null;
  completed: string | false;
  price: number;
}

export type { WorkingTimeAPI, WorkersAPI, OrdersAPI, WorkDayApi };
