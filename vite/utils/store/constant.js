export const WalletSpace = 'VITE_WEB_WALLET';

export const OldAccList = 'OLD_ACC_LIST';
export const KeystoreAccList = 'KEYSTORE_ACC_LIST';

export const LastKey = 'ACC_LAST';
export const AccListKey = 'ACC_LIST';

export const VersionKey = 'version';
export const SettingKeys = [ 'firstVisit', 'lang', 'autoLogoutTime', 'currency', 'isHoldPWD', 'showHoldPWDNum' ];
export const TradeKeys = [ 'favoriteTickers', 'beginnerGuide' ];

export const AccBaseKeys = [ 'name', 'addrNum', 'idx', 'addr' ];
export const AddrBaseKeys = [ 'name', 'id', 'idx' ];

// setting, trade
export const AccInfoKeys = [];
export const AddrInfoKeys = ['INDEX_COLLECT_TOKEN'];

// 1.7.0: XVite

// KEYSTORE_ACC_LIST:  [{ addr,  name?, keystore }]

// ACC_LAST: { id, addr, name, addrName }
// ACC_LIST: [{ id, lang, keystore }]

// ${id}: { name, addrNum, addr, idx }                           // storageKey: [ setting ]
// ${id}_${addr}: { name, idx }                                  // storageKey: [ INDEX_COLLECT_TOKEN ]

// ${id}_${key}: ???
// ${id}_setting: { showHoldPWDNum, isHoldPWD, autoLogoutTime }

// ${id}_${addr}_${key}: ???
// ${id}_${addr}_INDEX_COLLECT_TOKEN: []

// ${key}
// version: { currentCode, showList }
// const SettingKey = ['firstVisit', 'lang', 'autoLogoutTime', 'currency', 'isHoldPWD', 'showHoldPWDNum' ];
// const TradeKey = ['favoriteTickers', 'beginnerGuide'];
