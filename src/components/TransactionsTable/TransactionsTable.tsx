/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Button, Card, Table } from "antd";
import { ITransaction } from "models";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "stores";
import {
  fetchTransactions,
  removeTransaction,
  transactionStateSelector,
} from "stores/transaction";
import { AOS_FADE_UP } from "variables";
import "./TransactionsTable.scss";

export const TransactionsTable = () => {
  const dispatch = useAppDispatch();

  const {
    filter: { size: pageSize },
    transactions,
    loading,
    totalCount,
  } = useAppSelector(transactionStateSelector);

  const onDelete = useCallback(
    (id: number) => dispatch(removeTransaction(id)),
    [dispatch],
  );

  const columns = useRef([
    {
      title: "Beneficiary",
      dataIndex: "beneficiary",
      key: "beneficiary",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Actions",
      key: "action",
      render: (_: unknown, record: ITransaction) => (
        <Button danger onClick={() => onDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ]).current;
  const tableDataSource = useMemo(
    () =>
      transactions.map((tr) => ({
        ...tr,
        key: tr.id,
        date: tr.date.split("T")[0],
      })),
    [transactions],
  );

  useEffect(() => {
    dispatch(fetchTransactions({ size: pageSize, page: 1 }));
  }, []);

  return (
    <Card className="TransactionsTable" {...AOS_FADE_UP}>
      <Table
        className="TransactionsTable__table"
        dataSource={tableDataSource}
        columns={columns}
        loading={loading}
        rowKey={(record) => record.id}
        scroll={{
          y: "38vh",
        }}
        pagination={{
          total: totalCount,
          pageSize,
          pageSizeOptions: [5, 10, 15, 20, 50],
          defaultPageSize: 20,
          onChange(page, pageSize) {
            dispatch(fetchTransactions({ size: pageSize, page }));
          },
        }}
      />
    </Card>
  );
};
