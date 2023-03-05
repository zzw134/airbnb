import { memo } from "react";
import PropTypes from 'prop-types'
import HomeLongForWrapper from "./style";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/long-for-item";
import ScrollView from "@/base-ui/ScrollView";

const HomeLongFor = memo(props => {
  const {itemData} = props
  return (
    <HomeLongForWrapper>
      <SectionHeader title={itemData.title} subtitle={itemData.subtitle} />
      <ScrollView>{itemData.list.map((item, index) => <LongForItem item={item} key={index} />)}</ScrollView>
    </HomeLongForWrapper>
  )
})

HomeLongFor.propTypes = {
  itemData: PropTypes.object
}

export default HomeLongFor