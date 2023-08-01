import { useEffect, useState } from 'react'
import collection from './data.json'
import { inputOnChangeType } from '@/types/elements'

interface ILogicOutput {
  data: string[]
  handleSearch: (event: inputOnChangeType) => void
  handleSelect: (value: string) => void
  selectedItems: string[]
  handleDeselect: (value: string) => void
  isEmpty: boolean
}

export function useLogic(): ILogicOutput {
  const [data, setData] = useState<typeof collection.data>([])
  const cacheData = JSON.parse(localStorage.getItem('selected') ?? '[]')
  const [selectedItems, setSelectedItems] = useState<Array<string>>(
    cacheData ?? [],
  )
  const [isEmpty, setIsEmpty] = useState(true)

  const handleSearch = (event: inputOnChangeType): void => {
    const value = event.target.value.toLowerCase()
    const result = collection.data.filter(
      (item) =>
        item.toLowerCase().includes(value) && !selectedItems.includes(item),
    )
    setData(result)
    setIsEmpty(value.length <= 0)
  }

  const handleSelect = (value: string): void => {
    setSelectedItems((prevItems) => [...prevItems, value])
    const result = data.filter((item) => item !== value)
    setData(result)
  }

  const handleDeselect = (value: string): void => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item !== value))
    const result = data
    result.unshift(value)
    setData(result)
  }

  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(selectedItems))
  }, [selectedItems])

  return {
    data,
    handleSearch,
    handleSelect,
    selectedItems,
    handleDeselect,
    isEmpty,
  }
}
