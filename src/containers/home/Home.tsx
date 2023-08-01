import { useIntl } from 'react-intl'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useLogic } from './useLogic'
import { globalMessages } from '@/assets/globalMessages'
import { Container } from '@/containers/home/Home.style'
import {
  UI_Box,
  UI_Button,
  UI_Icon,
  UI_InputCheckbox,
  UI_Text,
  UI_TextField,
} from '@/ui-components'
import { Motion_comp } from '@/components'

export function Home_page(): JSX.Element {
  const { formatMessage } = useIntl()
  const {
    data,
    handleSearch,
    handleSelect,
    selectedItems,
    handleDeselect,
    isEmpty,
  } = useLogic()

  return (
    <Motion_comp>
      <Container>
        <UI_Text
          color='black'
          size={24}
          fontWeight='400'
          as='h4'
          mb={16}
          display='block'
        >
          {formatMessage(globalMessages.title)}
        </UI_Text>
        <UI_TextField
          onChange={handleSearch}
          placeholder={formatMessage(globalMessages.searchPlaceholder)}
          endAdornment={<UI_Icon color='black' icon={faSearch} />}
        />
        <UI_Box overflow='auto' maxHeight={600} pt={10} pb={10}>
          {selectedItems?.map((item, index) => (
            <UI_Box
              key={`selected_${item}_${index}`}
              display='flex'
              alignItems='center'
              mt={16}
            >
              <UI_InputCheckbox
                type='checkbox'
                checked
                onClick={() => handleDeselect(item)}
              />
              <UI_Text
                color='green'
                size={16}
                fontWeight='300'
                ml={8}
                display='inline-block'
              >
                {item}
              </UI_Text>
            </UI_Box>
          ))}

          {!isEmpty &&
            data?.map((item, index) => (
              <UI_Box
                key={`${item}_${index}`}
                display='flex'
                alignItems='center'
                mt={16}
              >
                <UI_InputCheckbox
                  type='checkbox'
                  onClick={() => handleSelect(item)}
                />
                <UI_Text
                  color='black'
                  size={16}
                  fontWeight='300'
                  ml={8}
                  display='inline-block'
                >
                  {item}
                </UI_Text>
              </UI_Box>
            ))}
        </UI_Box>
        <UI_Box mt={25}>
          <UI_Button variant='contained' size='md' fullWidth>
            {formatMessage(globalMessages.apply)}
          </UI_Button>
        </UI_Box>
      </Container>
    </Motion_comp>
  )
}
