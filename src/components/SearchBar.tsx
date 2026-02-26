import { ChangeEvent, FormEvent } from 'react'

interface SearchBarProps {
  city: string
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const SearchBar = ({ city, onInputChange, onSubmit }: SearchBarProps) => {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={onInputChange}
        className="search-input"
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  )
}

export default SearchBar
