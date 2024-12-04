const store = {
  state: {
    hotSearchOffsetY: 0,
    flapCardVisible: false,
    isEditMode: false,
    shelfList: [],
    shelfSelected: [],
    shelfTitleVisible: true,
    shelfCategory: [], // 书架分类数据
    currentType: 1 // 书架列表为1，书架里的分类列表为2
  },
  mutations: {
    SET_HOT_SEARCH_OFFSETY(state, y) {
      state.hotSearchOffsetY = y
    },
    SET_FLAP_CARD_VISIBLE(state, visible) {
      state.flapCardVisible = visible
    },
    SET_IS_EDIT_MODE(state, isEditMode) {
      state.isEditMode = isEditMode
    },
    SET_SHELF_LIST(state, list) {
      state.shelfList = list
    },
    SET_SHELF_SELECTED(state, selected) {
      state.shelfSelected = selected
    },
    SET_SHELF_TITLE_VISIBLE(state, visible) {
      state.shelfTitleVisible = visible
    },
    SET_SHELF_CATEGORY(state, category) {
      state.shelfCategory = category
    },
    SET_CURRENT_TYPE(state, type) {
      state.currentType = type
    }
  },
  getters: {
    hotSearchOffsetY: state => state.store.hotSearchOffsetY,
    hotSearchOffsetY: state => state.store.hotSearchOffsetY,
    flapCardVisible: state => state.store.flapCardVisible,
    isEditMode: state => state.store.isEditMode,
    shelfList: state => state.store.shelfList,
    shelfSelected: state => state.store.shelfSelected,
    shelfTitleVisible: state => state.store.shelfTitleVisible,
    shelfCategory: state => state.store.shelfCategory,
    currentType: state => state.store.currentType
  },
  actions: {
    setFlapCardVisible({ commit }, flapCardVisible) {
      return commit('SET_FLAP_CARD_VISIBLE', flapCardVisible)
    },
    setHotSearchOffsetY({ commit }, offsetY) {
      return commit('SET_HOT_SEARCH_OFFSETY', offsetY)
    },
    setIsEditMode({ commit }, isEditMode) {
      return commit('SET_IS_EDIT_MODE', isEditMode)
    },
    setShelfList({ commit }, list) {
      return commit('SET_SHELF_LIST', list)
    },
    setShelfSelected({ commit }, selected) {
      return commit('SET_SHELF_SELECTED', selected)
    },
    setShelfTitleVisible({ commit }, visible) {
      return commit('SET_SHELF_TITLE_VISIBLE', visible)
    },
    setShelfCategory({ commit }, category) {
      return commit('SET_SHELF_CATEGORY', category)
    },
    setCurrentType({ commit }, type) {
      return commit('SET_CURRENT_TYPE', type)
    },
  }
}

export default {
  namespaced: true,
  state: store.state,
  mutations: store.mutations,
  getters: store.getters,
  actions: store.actions
}
