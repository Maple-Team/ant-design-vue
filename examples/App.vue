<template>
  <div>
    <maple-table />
  </div>
</template>
<script>
import MapleTable from './table.vue';
export default {
  components: { MapleTable },
  data() {
    return {
      text: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
    };
  },
};
</script>
