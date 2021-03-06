import React from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Table from '@material-ui/core/Table';
import { mount } from 'enzyme';
import CustomTableHead from '../../../../src/components/tableComponents/CustomTableHead';

it('handle changing an sort label', () => {
  const mockOnRequestSort = jest.fn();
  const tableRows = [
    {
      id: 'uuid', numeric: false, disablePadding: true, label: 'Uuid',
    },
    {
      id: 'updatedAt', numeric: true, disablePadding: false, label: 'Updated at',
    },
    {
      id: 'side', numeric: true, disablePadding: false, label: 'Side',
    },
    {
      id: 'volume', numeric: true, disablePadding: false, label: 'Volume',
    },
    {
      id: 'price', numeric: true, disablePadding: false, label: 'Price',
    },
    {
      id: 'tradingPairSymbol', numeric: true, disablePadding: false, label: 'Trading Pair Symbol',
    },
  ];
  const wrapper = mount(
    <Table>
      <CustomTableHead onRequestSort={mockOnRequestSort} rows={tableRows} order="desc" orderBy="uuid" />
    </Table>,
  );
  wrapper.find(TableSortLabel).at(1).simulate('click');
  expect(mockOnRequestSort.mock.calls.length).toBe(1);
});
