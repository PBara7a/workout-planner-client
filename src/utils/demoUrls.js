const urls = [
  {
    1000: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044924/Exercises/1000_lqfcyv.gif",
  },
  {
    1001: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044924/Exercises/1001_zqtgsn.gif",
  },
  {
    1002: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044924/Exercises/1002_l7lmol.gif",
  },
  {
    1003: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044924/Exercises/1003_vrmt6b.gif",
  },
  {
    1004: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044924/Exercises/1004_kbcf7g.gif",
  },
  {
    1005: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044925/Exercises/1005_uy7zfb.gif",
  },
  {
    1007: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044925/Exercises/1007_hwnyrs.gif",
  },
  {
    1008: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044925/Exercises/1008_pkpdqd.gif",
  },
  {
    1009: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044926/Exercises/1009_kkkrk8.gif",
  },
  {
    1010: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044926/Exercises/1010_mxd1mn.gif",
  },
  {
    1011: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044926/Exercises/1011_qcnjka.gif",
  },
  {
    1012: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044927/Exercises/1012_nqywyd.gif",
  },
  {
    1013: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044927/Exercises/1013_u9q28h.gif",
  },
  {
    1014: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044926/Exercises/1014_d6dxra.gif",
  },
  {
    1015: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044927/Exercises/1015_qy546z.gif",
  },
  {
    1016: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044928/Exercises/1016_mvuzpj.gif",
  },
  {
    1017: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044928/Exercises/1017_rjjfwn.gif",
  },
  {
    1018: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044928/Exercises/1018_adh7ay.gif",
  },
  {
    1022: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044928/Exercises/1022_l6uxql.gif",
  },
  {
    1023: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044929/Exercises/1023_wrdynt.gif",
  },
  {
    1254: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044930/Exercises/1254_cehfbp.gif",
  },
  {
    1314: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044948/Exercises/1314_brbair.gif",
  },
  {
    1368: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044963/Exercises/1368_mqasz0.gif",
  },
  {
    1369: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044964/Exercises/1369_ewq0rf.gif",
  },
  {
    1405: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044973/Exercises/1405_ilvrjz.gif",
  },
  {
    1408: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044974/Exercises/1408_ybmm71.gif",
  },
  {
    1431: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044981/Exercises/1431_vqvx7p.gif",
  },
  {
    1432: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044981/Exercises/1432_ovmqa4.gif",
  },
  {
    1473: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044988/Exercises/1473_psvoxf.gif",
  },
  {
    1512: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044991/Exercises/1512_xloq4v.gif",
  },
  {
    1708: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045019/Exercises/1708_w4gpl1.gif",
  },
  {
    1709: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045019/Exercises/1709_angt9u.gif",
  },
  {
    1710: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045019/Exercises/1710_iwojkk.gif",
  },
  {
    1712: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045020/Exercises/1712_g5dtkw.gif",
  },
  {
    1713: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045020/Exercises/1713_qfbvdt.gif",
  },
  {
    1714: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045021/Exercises/1714_dtcejv.gif",
  },
  {
    1716: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045021/Exercises/1716_lwoikg.gif",
  },
  {
    1758: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045033/Exercises/1758_yzznct.gif",
  },
  {
    2333: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045053/Exercises/2333_wpsccl.gif",
  },
  {
    2355: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045054/Exercises/2355_kq2j1p.gif",
  },
  {
    2364: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045054/Exercises/2364_ape40u.gif",
  },
  {
    3116: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045072/Exercises/3116_dsmmlm.gif",
  },
  {
    3117: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045072/Exercises/3117_ldjas8.gif",
  },
  {
    3204: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045080/Exercises/3204_rvrcm5.gif",
  },
  {
    3214: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045084/Exercises/3214_e9rots.gif",
  },
  {
    3220: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045084/Exercises/3220_tjqfr8.gif",
  },
  {
    3293: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045092/Exercises/3293_gi9hci.gif",
  },
  {
    3294: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045093/Exercises/3294_k5fwph.gif",
  },
  {
    3297: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045094/Exercises/3297_xtmxnd.gif",
  },
  {
    3672: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045114/Exercises/3672_xnuxhb.gif",
  },
  {
    "0001":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044704/Exercises/0001_ccmjoz.gif",
  },
  {
    "0002":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044704/Exercises/0002_cebkzr.gif",
  },
  {
    "0003":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044704/Exercises/0003_sa8een.gif",
  },
  {
    "0006":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044704/Exercises/0006_thsgmr.gif",
  },
  {
    "0007":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044705/Exercises/0007_uzlq2u.gif",
  },
  {
    "0009":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044706/Exercises/0009_cf8vwm.gif",
  },
  {
    "0011":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044706/Exercises/0011_qfmbob.gif",
  },
  {
    "0010":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044706/Exercises/0010_inpo7p.gif",
  },
  {
    "0012":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044706/Exercises/0012_pprgtd.gif",
  },
  {
    "0013":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044706/Exercises/0013_rjmge0.gif",
  },
  {
    "0014":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044704/Exercises/0014_rdwdlx.gif",
  },
  {
    "0015":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044704/Exercises/0015_yhbzlp.gif",
  },
  {
    "0016":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044705/Exercises/0016_xcmosa.gif",
  },
  {
    "0017":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044706/Exercises/0017_jpqkp6.gif",
  },
  {
    "0018":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044707/Exercises/0018_ql5emc.gif",
  },
  {
    "0019":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044707/Exercises/0019_vyb5k1.gif",
  },
  {
    "0020":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044707/Exercises/0020_vjg08n.gif",
  },
  {
    "0968":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044915/Exercises/0968_fujfqk.gif",
  },
  {
    "0969":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044916/Exercises/0969_tna2oi.gif",
  },
  {
    "0970":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044916/Exercises/0970_uc7xq9.gif",
  },
  {
    "0971":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044916/Exercises/0971_vxmeqg.gif",
  },
  {
    "0980":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044918/Exercises/0980_mgaump.gif",
  },
  {
    "0972":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044916/Exercises/0972_dqyopn.gif",
  },
  {
    "0974":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044917/Exercises/0974_a9ynru.gif",
  },
  {
    "0975":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044917/Exercises/0975_tat3qk.gif",
  },
  {
    "0976":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044918/Exercises/0976_q3vra7.gif",
  },
  {
    "0977":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044917/Exercises/0977_auvfvt.gif",
  },
  {
    "0978":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044918/Exercises/0978_zd2v3v.gif",
  },
  {
    "0979":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044918/Exercises/0979_evuynq.gif",
  },
  {
    "0981":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044919/Exercises/0981_dzlydp.gif",
  },
  {
    "0983":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044919/Exercises/0983_swksnq.gif",
  },
  {
    "0985":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044920/Exercises/0985_gwrttm.gif",
  },
  {
    "0984":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044919/Exercises/0984_qlqksq.gif",
  },
  {
    "0986":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044920/Exercises/0986_izpsvg.gif",
  },
  {
    "0987":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044920/Exercises/0987_r8dd0e.gif",
  },
  {
    "0988":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044920/Exercises/0988_qcq3hh.gif",
  },
  {
    "0989":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044920/Exercises/0989_qb88we.gif",
  },
  {
    "0990":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044921/Exercises/0990_arqczy.gif",
  },
  {
    "0991":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044921/Exercises/0991_k6jqpt.gif",
  },
  {
    "0992":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044922/Exercises/0992_muitq0.gif",
  },
  {
    "0993":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044922/Exercises/0993_g9h9w6.gif",
  },
  {
    "0994":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044923/Exercises/0994_lkkhzp.gif",
  },
  {
    "0996":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044922/Exercises/0996_icxnfy.gif",
  },
  {
    "0997":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044922/Exercises/0997_ygkbx3.gif",
  },
  {
    "0998":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044923/Exercises/0998_k8gqt1.gif",
  },
  {
    "0999":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044924/Exercises/0999_e4dqpb.gif",
  },
  {
    "0023":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044708/Exercises/0023_tlqgnb.gif",
  },
  {
    "0024":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044708/Exercises/0024_emec9j.gif",
  },
  {
    "0025":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044709/Exercises/0025_tasvvb.gif",
  },
  {
    "0026":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044709/Exercises/0026_nitic9.gif",
  },
  {
    1255: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044931/Exercises/1255_gahdb2.gif",
  },
  {
    1256: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044931/Exercises/1256_ke1yzl.gif",
  },
  {
    1257: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044931/Exercises/1257_tfahmx.gif",
  },
  {
    1316: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044948/Exercises/1316_dyvnll.gif",
  },
  {
    1317: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044950/Exercises/1317_cpempi.gif",
  },
  {
    1370: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044964/Exercises/1370_ognxwx.gif",
  },
  {
    1371: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044965/Exercises/1371_giuc09.gif",
  },
  {
    1409: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044975/Exercises/1409_evan4z.gif",
  },
  {
    1410: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044975/Exercises/1410_sy4yeh.gif",
  },
  {
    1411: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044975/Exercises/1411_qujpnu.gif",
  },
  {
    1412: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044975/Exercises/1412_wp3fbf.gif",
  },
  {
    1435: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044982/Exercises/1435_bfgvaw.gif",
  },
  {
    1436: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044982/Exercises/1436_vmsxv9.gif",
  },
  {
    1461: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044986/Exercises/1461_mqyhk3.gif",
  },
  {
    1462: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044986/Exercises/1462_kdkbrx.gif",
  },
  {
    1545: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044992/Exercises/1545_ir7s0o.gif",
  },
  {
    1718: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045021/Exercises/1718_fbllmi.gif",
  },
  {
    1719: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045021/Exercises/1719_nefwkd.gif",
  },
  {
    1720: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045021/Exercises/1720_vwedsi.gif",
  },
  {
    1721: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045023/Exercises/1721_nj3ys8.gif",
  },
  {
    1751: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045032/Exercises/1751_ktqotu.gif",
  },
  {
    1756: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045033/Exercises/1756_rifhrc.gif",
  },
  {
    2187: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045042/Exercises/2187_uhjhnu.gif",
  },
  {
    2407: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045058/Exercises/2407_cutyyj.gif",
  },
  {
    2799: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045065/Exercises/2799_l5ydyt.gif",
  },
  {
    3017: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045073/Exercises/3017_kt64gl.gif",
  },
  {
    3562: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045105/Exercises/3562_jhaetf.gif",
  },
  {
    "0027":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044709/Exercises/0027_mjvhdh.gif",
  },
  {
    "0028":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044710/Exercises/0028_rvz4ne.gif",
  },
  {
    "0029":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044709/Exercises/0029_uay6as.gif",
  },
  {
    "0030":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044710/Exercises/0030_wpuwup.gif",
  },
  {
    "0031":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044710/Exercises/0031_biacas.gif",
  },
  {
    "0032":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044710/Exercises/0032_dt2spv.gif",
  },
  {
    "0033":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044711/Exercises/0033_secyag.gif",
  },
  {
    "0034":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044711/Exercises/0034_y4rphn.gif",
  },
  {
    "0035":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044711/Exercises/0035_lk49rm.gif",
  },
  {
    "0036":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044711/Exercises/0036_t61p7h.gif",
  },
  {
    "0037":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044711/Exercises/0037_hdbcjf.gif",
  },
  {
    "0038":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044712/Exercises/0038_wsma0w.gif",
  },
  {
    "0039":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044712/Exercises/0039_nkrtj4.gif",
  },
  {
    "0041":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044714/Exercises/0041_ifbeg7.gif",
  },
  {
    "0040":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044712/Exercises/0040_su2tys.gif",
  },
  {
    "0042":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044713/Exercises/0042_cbz8sp.gif",
  },
  {
    "0043":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044713/Exercises/0043_ic0eqk.gif",
  },
  {
    "0044":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044713/Exercises/0044_hl99dx.gif",
  },
  {
    "0045":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044714/Exercises/0045_kwtalb.gif",
  },
  {
    "0046":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044714/Exercises/0046_aldn27.gif",
  },
  {
    "0047":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044715/Exercises/0047_myu48z.gif",
  },
  {
    "0048":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044714/Exercises/0048_y2akwy.gif",
  },
  {
    "0049":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044714/Exercises/0049_plfgdn.gif",
  },
  {
    "0050":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044716/Exercises/0050_nxafpe.gif",
  },
  {
    "0051":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044716/Exercises/0051_jv6ecq.gif",
  },
  {
    "0052":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044716/Exercises/0052_wp8vyj.gif",
  },
  {
    "0053":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044716/Exercises/0053_f7fqsl.gif",
  },
  {
    "0054":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044716/Exercises/0054_l9wt1j.gif",
  },
  {
    "0055":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044717/Exercises/0055_tp8pp4.gif",
  },
  {
    "0056":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044717/Exercises/0056_cmquwf.gif",
  },
  {
    "0057":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044717/Exercises/0057_s1km5z.gif",
  },
  {
    "0058":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044718/Exercises/0058_x5zxb6.gif",
  },
  {
    "0059":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044718/Exercises/0059_q9u5qy.gif",
  },
  {
    "0061":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044719/Exercises/0061_fmommf.gif",
  },
  {
    "0060":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044718/Exercises/0060_twyqaq.gif",
  },
  {
    "0063":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044719/Exercises/0063_dx3cik.gif",
  },
  {
    "0064":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044718/Exercises/0064_gfolwy.gif",
  },
  {
    "0065":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044719/Exercises/0065_jbg8c2.gif",
  },
  {
    "0066":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044720/Exercises/0066_wuvh30.gif",
  },
  {
    "0067":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044722/Exercises/0067_q8awwi.gif",
  },
  {
    "0068":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044720/Exercises/0068_sohuuo.gif",
  },
  {
    "0069":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044721/Exercises/0069_rzfjds.gif",
  },
  {
    "0070":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044721/Exercises/0070_yvkoeu.gif",
  },
  {
    "0071":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044721/Exercises/0071_v9shwz.gif",
  },
  {
    "0072":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044721/Exercises/0072_gakqza.gif",
  },
  {
    "0073":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044721/Exercises/0073_q7r9xj.gif",
  },
  {
    "0022":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044707/Exercises/0022_xxwqhv.gif",
  },
  {
    "0074":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044722/Exercises/0074_vw4wmb.gif",
  },
  {
    "0075":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044722/Exercises/0075_nfp7mv.gif",
  },
  {
    "0076":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044723/Exercises/0076_d12rck.gif",
  },
  {
    "0078":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044723/Exercises/0078_kqbokw.gif",
  },
  {
    "0077":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044723/Exercises/0077_ninurp.gif",
  },
  {
    "0079":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044724/Exercises/0079_bovv6x.gif",
  },
  {
    "0080":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044723/Exercises/0080_ndausg.gif",
  },
  {
    "0118":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044734/Exercises/0118_t2klpt.gif",
  },
  {
    "0081":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044724/Exercises/0081_mcgqdo.gif",
  },
  {
    "0082":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044724/Exercises/0082_rk5qi0.gif",
  },
  {
    "0084":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044724/Exercises/0084_qnyc3x.gif",
  },
  {
    "0083":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044725/Exercises/0083_fl1sm9.gif",
  },
  {
    "0085":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044725/Exercises/0085_gdchyb.gif",
  },
  {
    "0086":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044726/Exercises/0086_mpb5lz.gif",
  },
  {
    "0087":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044726/Exercises/0087_ts2coh.gif",
  },
  {
    "0088":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044726/Exercises/0088_ib37hv.gif",
  },
  {
    "0089":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044726/Exercises/0089_muntye.gif",
  },
  {
    "0090":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044727/Exercises/0090_ddox4o.gif",
  },
  {
    "0091":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044728/Exercises/0091_u0c1p6.gif",
  },
  {
    "0092":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044727/Exercises/0092_ijd7wk.gif",
  },
  {
    "0094":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044728/Exercises/0094_dxj55b.gif",
  },
  {
    "0095":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044727/Exercises/0095_zrv1m9.gif",
  },
  {
    "0096":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044728/Exercises/0096_jqtufp.gif",
  },
  {
    "0098":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044728/Exercises/0098_uqd1xx.gif",
  },
  {
    "0097":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044728/Exercises/0097_i1j6lw.gif",
  },
  {
    "0099":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044729/Exercises/0099_bax7mi.gif",
  },
  {
    1160: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044929/Exercises/1160_gzfee3.gif",
  },
  {
    1258: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044932/Exercises/1258_sozx15.gif",
  },
  {
    1259: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044932/Exercises/1259_wjaiyo.gif",
  },
  {
    1260: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044932/Exercises/1260_qyqqxw.gif",
  },
  {
    1261: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044933/Exercises/1261_mwdgca.gif",
  },
  {
    1318: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044950/Exercises/1318_xnwgh7.gif",
  },
  {
    1372: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044964/Exercises/1372_letfox.gif",
  },
  {
    1373: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044964/Exercises/1373_bgsptp.gif",
  },
  {
    1374: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044965/Exercises/1374_bicaa2.gif",
  },
  {
    1399: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044973/Exercises/1399_tqvxab.gif",
  },
  {
    1456: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044984/Exercises/1456_k4rhkv.gif",
  },
  {
    1457: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044985/Exercises/1457_dybnpt.gif",
  },
  {
    1494: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044991/Exercises/1494_e1mkj4.gif",
  },
  {
    1629: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044999/Exercises/1629_xtiylb.gif",
  },
  {
    1630: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044999/Exercises/1630_o6ky0g.gif",
  },
  {
    1631: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044999/Exercises/1631_fleadg.gif",
  },
  {
    1632: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045000/Exercises/1632_shcobk.gif",
  },
  {
    1722: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045023/Exercises/1722_umyn54.gif",
  },
  {
    1769: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045036/Exercises/1769_jhorll.gif",
  },
  {
    1770: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045037/Exercises/1770_w0bh9g.gif",
  },
  {
    1771: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045037/Exercises/1771_fio3iz.gif",
  },
  {
    2414: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045061/Exercises/2414_jytqr0.gif",
  },
  {
    2466: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045062/Exercises/2466_kzzbvw.gif",
  },
  {
    2798: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045067/Exercises/2798_vkwnc3.gif",
  },
  {
    2800: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045065/Exercises/2800_n5pgea.gif",
  },
  {
    2810: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045068/Exercises/2810_ydushx.gif",
  },
  {
    3019: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045072/Exercises/3019_p7wovn.gif",
  },
  {
    3156: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045075/Exercises/3156_vbbljs.gif",
  },
  {
    3158: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045075/Exercises/3158_jv1xid.gif",
  },
  {
    3161: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045076/Exercises/3161_ao0fmx.gif",
  },
  {
    3162: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045076/Exercises/3162_vajpzl.gif",
  },
  {
    3165: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045076/Exercises/3165_v3a0qg.gif",
  },
  {
    3166: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045077/Exercises/3166_qcgaxl.gif",
  },
  {
    3167: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045077/Exercises/3167_aggimg.gif",
  },
  {
    3168: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045078/Exercises/3168_jpd6uq.gif",
  },
  {
    3212: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045080/Exercises/3212_ip9zdw.gif",
  },
  {
    3235: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045087/Exercises/3235_upwu89.gif",
  },
  {
    3305: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045096/Exercises/3305_ohhsyv.gif",
  },
  {
    3360: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045098/Exercises/3360_hxr1zh.gif",
  },
  {
    3543: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045102/Exercises/3543_f80fub.gif",
  },
  {
    3544: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045102/Exercises/3544_rfx1u6.gif",
  },
  {
    3639: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045108/Exercises/3639_qzetsy.gif",
  },
  {
    "0100":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044729/Exercises/0100_nsz0gv.gif",
  },
  {
    "0101":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044730/Exercises/0101_gdedh8.gif",
  },
  {
    "0102":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044730/Exercises/0102_rpohmc.gif",
  },
  {
    "0103":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044730/Exercises/0103_m7ngyf.gif",
  },
  {
    "0104":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044730/Exercises/0104_xpbuzd.gif",
  },
  {
    "0105":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044731/Exercises/0105_pkdhf6.gif",
  },
  {
    "0106":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044731/Exercises/0106_o8txew.gif",
  },
  {
    "0107":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044731/Exercises/0107_lvfjme.gif",
  },
  {
    "0108":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044732/Exercises/0108_n1h7gd.gif",
  },
  {
    "0109":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044732/Exercises/0109_cxnkn0.gif",
  },
  {
    "0110":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044732/Exercises/0110_drhg9l.gif",
  },
  {
    "0111":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044732/Exercises/0111_ipoxee.gif",
  },
  {
    "0112":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044733/Exercises/0112_elfvlt.gif",
  },
  {
    "0113":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044733/Exercises/0113_iyinuv.gif",
  },
  {
    "0114":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044733/Exercises/0114_gvleef.gif",
  },
  {
    "0115":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044734/Exercises/0115_fs2pv9.gif",
  },
  {
    "0116":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044734/Exercises/0116_ndf5o8.gif",
  },
  {
    "0117":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044734/Exercises/0117_ybgzke.gif",
  },
  {
    "0120":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044735/Exercises/0120_emjegq.gif",
  },
  {
    "0119":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044735/Exercises/0119_u4z67r.gif",
  },
  {
    "0121":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044736/Exercises/0121_wis6lk.gif",
  },
  {
    "0122":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044736/Exercises/0122_t9dt1v.gif",
  },
  {
    "0124":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044736/Exercises/0124_cbtp1v.gif",
  },
  {
    "0123":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044736/Exercises/0123_cq4afn.gif",
  },
  {
    "0126":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044737/Exercises/0126_qsxxf6.gif",
  },
  {
    "0125":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044737/Exercises/0125_m6biys.gif",
  },
  {
    "0127":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044738/Exercises/0127_p0wtpy.gif",
  },
  {
    "0128":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044737/Exercises/0128_otmzzc.gif",
  },
  {
    "0129":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044738/Exercises/0129_niziho.gif",
  },
  {
    "0130":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044738/Exercises/0130_yya2cv.gif",
  },
  {
    "0139":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044738/Exercises/0139_ofji2d.gif",
  },
  {
    "0140":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044739/Exercises/0140_jiickq.gif",
  },
  {
    "0137":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044739/Exercises/0137_qscmmm.gif",
  },
  {
    "0138":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044738/Exercises/0138_nqr67m.gif",
  },
  {
    "0870":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044914/Exercises/0870_bwmotb.gif",
  },
  {
    "0148":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044739/Exercises/0148_h4wfju.gif",
  },
  {
    "0149":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044739/Exercises/0149_kx0xet.gif",
  },
  {
    "0150":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044740/Exercises/0150_uxyqbu.gif",
  },
  {
    "0151":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044740/Exercises/0151_ijgcbn.gif",
  },
  {
    "0152":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044740/Exercises/0152_fthgf6.gif",
  },
  {
    "0153":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044741/Exercises/0153_hreenb.gif",
  },
  {
    "0154":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044741/Exercises/0154_egtdsu.gif",
  },
  {
    "0155":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044741/Exercises/0155_uv29tg.gif",
  },
  {
    "0868":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044913/Exercises/0868_iidfyg.gif",
  },
  {
    "0157":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044741/Exercises/0157_sghwh8.gif",
  },
  {
    "0158":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044742/Exercises/0158_zx9xga.gif",
  },
  {
    "0159":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044742/Exercises/0159_zvsr8x.gif",
  },
  {
    "0160":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044743/Exercises/0160_gn74hv.gif",
  },
  {
    "0161":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044743/Exercises/0161_pmljnm.gif",
  },
  {
    "0162":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044743/Exercises/0162_ecqigx.gif",
  },
  {
    "0164":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044743/Exercises/0164_dl9zap.gif",
  },
  {
    "0165":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044744/Exercises/0165_ez9k03.gif",
  },
  {
    "0167":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044744/Exercises/0167_einatn.gif",
  },
  {
    "0168":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044744/Exercises/0168_xng9c6.gif",
  },
  {
    "0169":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044745/Exercises/0169_awtmp6.gif",
  },
  {
    "0171":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044745/Exercises/0171_jn7eqh.gif",
  },
  {
    "0170":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044745/Exercises/0170_rygf5c.gif",
  },
  {
    "0172":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044745/Exercises/0172_vynjmk.gif",
  },
  {
    1262: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044933/Exercises/1262_uswujh.gif",
  },
  {
    1263: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044933/Exercises/1263_dp1n6r.gif",
  },
  {
    1264: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044934/Exercises/1264_psxam2.gif",
  },
  {
    1265: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044934/Exercises/1265_cvjmou.gif",
  },
  {
    1266: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044934/Exercises/1266_pp9ol6.gif",
  },
  {
    1267: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044934/Exercises/1267_opwrv3.gif",
  },
  {
    1268: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044935/Exercises/1268_caf7n2.gif",
  },
  {
    1319: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044950/Exercises/1319_uldg3e.gif",
  },
  {
    1320: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044950/Exercises/1320_rjz09c.gif",
  },
  {
    1321: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044950/Exercises/1321_skga0e.gif",
  },
  {
    1322: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044950/Exercises/1322_lmr4jr.gif",
  },
  {
    1323: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044951/Exercises/1323_rqejfe.gif",
  },
  {
    1375: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044965/Exercises/1375_u02lt9.gif",
  },
  {
    1376: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044966/Exercises/1376_u0o8sf.gif",
  },
  {
    1413: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044975/Exercises/1413_dov1cq.gif",
  },
  {
    1633: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045001/Exercises/1633_hai5uv.gif",
  },
  {
    1634: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045001/Exercises/1634_x5cvrm.gif",
  },
  {
    1635: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045001/Exercises/1635_ire3kp.gif",
  },
  {
    1636: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045001/Exercises/1636_rp738n.gif",
  },
  {
    1637: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045001/Exercises/1637_npzl4e.gif",
  },
  {
    1638: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045001/Exercises/1638_dxidik.gif",
  },
  {
    1639: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045002/Exercises/1639_yen6on.gif",
  },
  {
    1640: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045003/Exercises/1640_hegaiq.gif",
  },
  {
    1641: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045003/Exercises/1641_fxrq9y.gif",
  },
  {
    1642: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045003/Exercises/1642_q8f2re.gif",
  },
  {
    1643: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045003/Exercises/1643_kztukj.gif",
  },
  {
    1644: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045003/Exercises/1644_qaztls.gif",
  },
  {
    1717: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045021/Exercises/1717_zktbqj.gif",
  },
  {
    1723: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045023/Exercises/1723_e2cf5b.gif",
  },
  {
    1724: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045023/Exercises/1724_oumh1t.gif",
  },
  {
    1725: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045023/Exercises/1725_ihvxja.gif",
  },
  {
    1726: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045023/Exercises/1726_kxzjnh.gif",
  },
  {
    2144: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045042/Exercises/2144_gymcxh.gif",
  },
  {
    2330: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045052/Exercises/2330_s9v40r.gif",
  },
  {
    2399: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045056/Exercises/2399_cp2hnk.gif",
  },
  {
    2406: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045058/Exercises/2406_wkmico.gif",
  },
  {
    2616: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045063/Exercises/2616_krswo1.gif",
  },
  {
    3563: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045105/Exercises/3563_qi9ts5.gif",
  },
  {
    3697: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045114/Exercises/3697_cubqoj.gif",
  },
  {
    "0173":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044746/Exercises/0173_tluedd.gif",
  },
  {
    "0174":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044746/Exercises/0174_e7si1y.gif",
  },
  {
    "0860":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044911/Exercises/0860_dfiyzz.gif",
  },
  {
    "0175":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044747/Exercises/0175_smmghs.gif",
  },
  {
    "0176":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044747/Exercises/0176_tegpzw.gif",
  },
  {
    "0177":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044747/Exercises/0177_mbo9fy.gif",
  },
  {
    "0178":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044747/Exercises/0178_pd1bnb.gif",
  },
  {
    "0179":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044748/Exercises/0179_qwoixt.gif",
  },
  {
    "0180":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044748/Exercises/0180_uo3gnd.gif",
  },
  {
    "0182":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044749/Exercises/0182_pbkmyk.gif",
  },
  {
    "0184":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044748/Exercises/0184_x5bhtb.gif",
  },
  {
    "0185":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044749/Exercises/0185_gcx9oo.gif",
  },
  {
    "0186":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044750/Exercises/0186_cvb8k9.gif",
  },
  {
    "0188":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044749/Exercises/0188_t0dymv.gif",
  },
  {
    "0189":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044750/Exercises/0189_iqshei.gif",
  },
  {
    "0190":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044750/Exercises/0190_rmzapg.gif",
  },
  {
    "0191":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044750/Exercises/0191_mym2e5.gif",
  },
  {
    "0192":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044750/Exercises/0192_ifjsnm.gif",
  },
  {
    "0193":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044751/Exercises/0193_ptcvhh.gif",
  },
  {
    "0194":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044752/Exercises/0194_o8frrz.gif",
  },
  {
    "0195":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044751/Exercises/0195_yornht.gif",
  },
  {
    "0196":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044752/Exercises/0196_tcuxgz.gif",
  },
  {
    "0198":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044753/Exercises/0198_j829ov.gif",
  },
  {
    "0197":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044751/Exercises/0197_zp4ejr.gif",
  },
  {
    "0201":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044754/Exercises/0201_lz5zzs.gif",
  },
  {
    "0199":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044753/Exercises/0199_blfvye.gif",
  },
  {
    "0200":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044753/Exercises/0200_jcuzog.gif",
  },
  {
    "0202":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044754/Exercises/0202_swfaol.gif",
  },
  {
    "0203":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044754/Exercises/0203_n4lcid.gif",
  },
  {
    "0204":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044754/Exercises/0204_t6bszv.gif",
  },
  {
    "0205":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044755/Exercises/0205_js3574.gif",
  },
  {
    "0873":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044914/Exercises/0873_w6gqv7.gif",
  },
  {
    "0206":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044755/Exercises/0206_jsmq5z.gif",
  },
  {
    "0209":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044756/Exercises/0209_jlgrd6.gif",
  },
  {
    "0210":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044756/Exercises/0210_a1qju3.gif",
  },
  {
    "0207":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044756/Exercises/0207_iyxlg4.gif",
  },
  {
    "0208":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044756/Exercises/0208_uqnart.gif",
  },
  {
    "0211":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044756/Exercises/0211_uyoeqp.gif",
  },
  {
    "0212":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044757/Exercises/0212_m4phui.gif",
  },
  {
    "0213":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044757/Exercises/0213_zrmjq0.gif",
  },
  {
    "0214":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044757/Exercises/0214_vgdird.gif",
  },
  {
    "0215":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044758/Exercises/0215_or3nib.gif",
  },
  {
    "0861":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044911/Exercises/0861_bjmgyz.gif",
  },
  {
    "0216":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044757/Exercises/0216_qfyklj.gif",
  },
  {
    "0218":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044758/Exercises/0218_eequqo.gif",
  },
  {
    "0219":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044758/Exercises/0219_ckqomo.gif",
  },
  {
    "0220":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044759/Exercises/0220_sm6cmz.gif",
  },
  {
    "0222":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044760/Exercises/0222_zpr4nf.gif",
  },
  {
    "0221":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044760/Exercises/0221_nqiuqk.gif",
  },
  {
    "0223":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044759/Exercises/0223_pazkwg.gif",
  },
  {
    "0224":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044759/Exercises/0224_rx21tg.gif",
  },
  {
    "0225":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044760/Exercises/0225_ndx0qh.gif",
  },
  {
    "0226":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044760/Exercises/0226_uak3jn.gif",
  },
  {
    "0874":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044915/Exercises/0874_t4pwhr.gif",
  },
  {
    "0227":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044761/Exercises/0227_or362a.gif",
  },
  {
    "0228":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044762/Exercises/0228_sjmixn.gif",
  },
  {
    "0229":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044761/Exercises/0229_gyzvhe.gif",
  },
  {
    "0230":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044762/Exercises/0230_ra9nrc.gif",
  },
  {
    "0231":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044762/Exercises/0231_wsatt2.gif",
  },
  {
    "0232":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044762/Exercises/0232_l5cvpr.gif",
  },
  {
    "0233":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044763/Exercises/0233_lq6npi.gif",
  },
  {
    1201: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044930/Exercises/1201_ocrfdp.gif",
  },
  {
    1269: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044935/Exercises/1269_zyhhdv.gif",
  },
  {
    1270: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044935/Exercises/1270_g61grq.gif",
  },
  {
    1271: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044935/Exercises/1271_h9xpns.gif",
  },
  {
    1272: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044935/Exercises/1272_ofzmdf.gif",
  },
  {
    1273: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044936/Exercises/1273_i3m4pn.gif",
  },
  {
    1274: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044937/Exercises/1274_pzrih7.gif",
  },
  {
    1275: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044938/Exercises/1275_qspvyp.gif",
  },
  {
    1276: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044937/Exercises/1276_otozr4.gif",
  },
  {
    1324: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044952/Exercises/1324_aari6v.gif",
  },
  {
    1325: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044951/Exercises/1325_fhpbha.gif",
  },
  {
    1326: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044952/Exercises/1326_svwwgj.gif",
  },
  {
    1327: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044952/Exercises/1327_dnyshk.gif",
  },
  {
    1377: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044965/Exercises/1377_ezu2he.gif",
  },
  {
    1378: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044966/Exercises/1378_vwpavi.gif",
  },
  {
    1407: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044973/Exercises/1407_lcfztu.gif",
  },
  {
    1430: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044980/Exercises/1430_bwavpf.gif",
  },
  {
    1468: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044988/Exercises/1468_czyujt.gif",
  },
  {
    1548: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044992/Exercises/1548_mldvje.gif",
  },
  {
    1645: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045004/Exercises/1645_lrcnwc.gif",
  },
  {
    1646: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045005/Exercises/1646_ytq5ke.gif",
  },
  {
    1647: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045005/Exercises/1647_lwz6ya.gif",
  },
  {
    1648: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045005/Exercises/1648_fvkgfi.gif",
  },
  {
    1649: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045006/Exercises/1649_endx3i.gif",
  },
  {
    1650: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045006/Exercises/1650_qqyx5y.gif",
  },
  {
    1651: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045006/Exercises/1651_lac7qa.gif",
  },
  {
    1652: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045007/Exercises/1652_ek8wf4.gif",
  },
  {
    1653: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045007/Exercises/1653_n1p5wf.gif",
  },
  {
    1654: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045006/Exercises/1654_zshz0f.gif",
  },
  {
    1655: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045007/Exercises/1655_qvnmis.gif",
  },
  {
    1656: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045008/Exercises/1656_hoxv0t.gif",
  },
  {
    1657: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045008/Exercises/1657_krzpuo.gif",
  },
  {
    1727: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045024/Exercises/1727_aad6lz.gif",
  },
  {
    1728: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045025/Exercises/1728_reboff.gif",
  },
  {
    1731: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045025/Exercises/1731_sgycwo.gif",
  },
  {
    2136: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045040/Exercises/2136_q62p28.gif",
  },
  {
    2137: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045040/Exercises/2137_u1mzhw.gif",
  },
  {
    2331: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045053/Exercises/2331_g8zddl.gif",
  },
  {
    2398: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045055/Exercises/2398_vqvzpm.gif",
  },
  {
    2401: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045056/Exercises/2401_xiagwg.gif",
  },
  {
    2403: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045058/Exercises/2403_tfdsau.gif",
  },
  {
    2405: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045058/Exercises/2405_j5wkmz.gif",
  },
  {
    2462: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045060/Exercises/2462_b2qbo2.gif",
  },
  {
    2464: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045061/Exercises/2464_mqjdet.gif",
  },
  {
    2963: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045069/Exercises/2963_qdyl7f.gif",
  },
  {
    3016: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045071/Exercises/3016_vpir5n.gif",
  },
  {
    3216: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045082/Exercises/3216_ialjs3.gif",
  },
  {
    3635: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045105/Exercises/3635_nlyetq.gif",
  },
  {
    3769: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045117/Exercises/3769_zpuqvl.gif",
  },
  {
    "0234":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044763/Exercises/0234_wenyyn.gif",
  },
  {
    "0235":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044763/Exercises/0235_prtiwv.gif",
  },
  {
    "0236":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044763/Exercises/0236_jbr6fr.gif",
  },
  {
    "0238":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044764/Exercises/0238_wetx5j.gif",
  },
  {
    "0237":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044764/Exercises/0237_sk1usr.gif",
  },
  {
    "0239":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044765/Exercises/0239_y3v6tv.gif",
  },
  {
    "0240":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044765/Exercises/0240_of4ldt.gif",
  },
  {
    "0241":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044765/Exercises/0241_gwnrxl.gif",
  },
  {
    "0242":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044765/Exercises/0242_qiakoh.gif",
  },
  {
    "0243":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044765/Exercises/0243_o4nhol.gif",
  },
  {
    "0862":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044911/Exercises/0862_oeicti.gif",
  },
  {
    "0244":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044766/Exercises/0244_hygc1e.gif",
  },
  {
    "0245":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044767/Exercises/0245_vmbxrk.gif",
  },
  {
    "0246":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044767/Exercises/0246_ozkvee.gif",
  },
  {
    "0247":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044767/Exercises/0247_ytpekm.gif",
  },
  {
    "0248":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044768/Exercises/0248_nwixbw.gif",
  },
  {
    "0251":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044767/Exercises/0251_fsuvyq.gif",
  },
  {
    "0253":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044767/Exercises/0253_zoceqy.gif",
  },
  {
    "0257":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044768/Exercises/0257_wf1dri.gif",
  },
  {
    "0258":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044769/Exercises/0258_knidc5.gif",
  },
  {
    "0259":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044769/Exercises/0259_qijdko.gif",
  },
  {
    "0260":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044769/Exercises/0260_hyif5g.gif",
  },
  {
    "0262":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044769/Exercises/0262_d0mfry.gif",
  },
  {
    "0267":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044769/Exercises/0267_lbrolu.gif",
  },
  {
    "0271":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044771/Exercises/0271_ldcilv.gif",
  },
  {
    "0272":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044770/Exercises/0272_vpmueh.gif",
  },
  {
    "0274":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044771/Exercises/0274_nkcwfr.gif",
  },
  {
    "0276":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044771/Exercises/0276_rwnrnc.gif",
  },
  {
    "0277":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044771/Exercises/0277_tqjogh.gif",
  },
  {
    "0279":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044771/Exercises/0279_dz4lcf.gif",
  },
  {
    "0282":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044772/Exercises/0282_gblwan.gif",
  },
  {
    "0283":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044772/Exercises/0283_pynkkp.gif",
  },
  {
    "0284":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044772/Exercises/0284_uoixgu.gif",
  },
  {
    "0285":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044772/Exercises/0285_rdkge7.gif",
  },
  {
    "0286":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044773/Exercises/0286_hmqn8g.gif",
  },
  {
    "0287":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044774/Exercises/0287_cbah1c.gif",
  },
  {
    "0288":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044774/Exercises/0288_jk3atl.gif",
  },
  {
    "0289":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044775/Exercises/0289_xyzmqg.gif",
  },
  {
    "0290":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044774/Exercises/0290_ea2mzz.gif",
  },
  {
    "0291":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044775/Exercises/0291_w2daqw.gif",
  },
  {
    "0293":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044775/Exercises/0293_q8gjqa.gif",
  },
  {
    "0294":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044776/Exercises/0294_ruslun.gif",
  },
  {
    "0295":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044777/Exercises/0295_yzex1j.gif",
  },
  {
    "0296":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044777/Exercises/0296_mckwde.gif",
  },
  {
    "0297":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044777/Exercises/0297_ding4c.gif",
  },
  {
    "0298":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044777/Exercises/0298_inhoo4.gif",
  },
  {
    "0299":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044777/Exercises/0299_g3zrfp.gif",
  },
  {
    "0300":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044777/Exercises/0300_jyhacy.gif",
  },
  {
    "0301":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044778/Exercises/0301_pqvblk.gif",
  },
  {
    "0302":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044779/Exercises/0302_ip9tg2.gif",
  },
  {
    "0303":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044779/Exercises/0303_moshfa.gif",
  },
  {
    1277: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044937/Exercises/1277_qihrpa.gif",
  },
  {
    1278: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044937/Exercises/1278_lvf0up.gif",
  },
  {
    1279: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044938/Exercises/1279_tdtezi.gif",
  },
  {
    1280: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044938/Exercises/1280_utc40y.gif",
  },
  {
    1281: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044939/Exercises/1281_mogbpc.gif",
  },
  {
    1282: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044939/Exercises/1282_hke0vf.gif",
  },
  {
    1283: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044939/Exercises/1283_v2ppul.gif",
  },
  {
    1284: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044939/Exercises/1284_ktwmmo.gif",
  },
  {
    1285: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044940/Exercises/1285_mzngj3.gif",
  },
  {
    1286: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044940/Exercises/1286_jxluvg.gif",
  },
  {
    1287: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044940/Exercises/1287_jqwaec.gif",
  },
  {
    1288: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044941/Exercises/1288_htcynd.gif",
  },
  {
    1289: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044941/Exercises/1289_f7tong.gif",
  },
  {
    1290: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044941/Exercises/1290_t4pphq.gif",
  },
  {
    1291: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044941/Exercises/1291_iuhwdb.gif",
  },
  {
    1328: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044952/Exercises/1328_jxme4e.gif",
  },
  {
    1437: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044984/Exercises/1437_jur38t.gif",
  },
  {
    1617: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044996/Exercises/1617_iym8ax.gif",
  },
  {
    1618: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044996/Exercises/1618_nh18nw.gif",
  },
  {
    1619: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044996/Exercises/1619_pnw6ca.gif",
  },
  {
    1620: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044997/Exercises/1620_pyjenj.gif",
  },
  {
    1621: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044997/Exercises/1621_nhtzb1.gif",
  },
  {
    1658: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045008/Exercises/1658_pzxiy4.gif",
  },
  {
    1659: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045008/Exercises/1659_hxmj4f.gif",
  },
  {
    1660: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045008/Exercises/1660_ycj0us.gif",
  },
  {
    1661: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045010/Exercises/1661_zmn4rn.gif",
  },
  {
    1662: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045009/Exercises/1662_e2lhfm.gif",
  },
  {
    1663: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045010/Exercises/1663_d5rizu.gif",
  },
  {
    1664: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045010/Exercises/1664_muyhgp.gif",
  },
  {
    1665: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045010/Exercises/1665_mehzp9.gif",
  },
  {
    1666: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045011/Exercises/1666_wpllea.gif",
  },
  {
    1729: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045025/Exercises/1729_tf5oj4.gif",
  },
  {
    1732: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045026/Exercises/1732_rtwhsu.gif",
  },
  {
    1733: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045026/Exercises/1733_cuedva.gif",
  },
  {
    1734: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045027/Exercises/1734_rfz08e.gif",
  },
  {
    1735: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045027/Exercises/1735_wgq8oi.gif",
  },
  {
    1736: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045027/Exercises/1736_ewpten.gif",
  },
  {
    1760: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045034/Exercises/1760_hrcluh.gif",
  },
  {
    2402: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045057/Exercises/2402_fyik4t.gif",
  },
  {
    2470: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045062/Exercises/2470_j2mq85.gif",
  },
  {
    2705: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045064/Exercises/2705_gnwsfr.gif",
  },
  {
    2706: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045064/Exercises/2706_cbilca.gif",
  },
  {
    3541: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045101/Exercises/3541_tazbpv.gif",
  },
  {
    3542: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045101/Exercises/3542_jamucx.gif",
  },
  {
    3545: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045103/Exercises/3545_ctppyk.gif",
  },
  {
    "0305":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044780/Exercises/0305_lozlct.gif",
  },
  {
    "0304":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044780/Exercises/0304_qcgnmn.gif",
  },
  {
    "0306":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044779/Exercises/0306_zm1zly.gif",
  },
  {
    "0307":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044780/Exercises/0307_tz3xdf.gif",
  },
  {
    "0308":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044781/Exercises/0308_j7fe8t.gif",
  },
  {
    "0310":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044781/Exercises/0310_h3f68g.gif",
  },
  {
    "0309":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044781/Exercises/0309_o8mvs3.gif",
  },
  {
    "0311":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044781/Exercises/0311_bdqkl0.gif",
  },
  {
    "0313":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044782/Exercises/0313_ictrbn.gif",
  },
  {
    "0312":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044782/Exercises/0312_qixd9v.gif",
  },
  {
    "0314":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044782/Exercises/0314_zv4ujl.gif",
  },
  {
    "0315":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044783/Exercises/0315_e7jmlj.gif",
  },
  {
    "0316":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044783/Exercises/0316_glt7ua.gif",
  },
  {
    "0318":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044784/Exercises/0318_ay7rek.gif",
  },
  {
    "0317":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044783/Exercises/0317_k6ecvc.gif",
  },
  {
    "0319":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044784/Exercises/0319_pvko8m.gif",
  },
  {
    "0320":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044785/Exercises/0320_aqnl7a.gif",
  },
  {
    "0321":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044785/Exercises/0321_qucdwn.gif",
  },
  {
    "0322":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044785/Exercises/0322_bzi29a.gif",
  },
  {
    "0323":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044785/Exercises/0323_dviyoi.gif",
  },
  {
    "0324":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044786/Exercises/0324_iuqtsi.gif",
  },
  {
    "0325":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044786/Exercises/0325_nfjfc0.gif",
  },
  {
    "0326":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044787/Exercises/0326_grs3yv.gif",
  },
  {
    "0327":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044787/Exercises/0327_y0qoss.gif",
  },
  {
    "0328":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044787/Exercises/0328_xccca9.gif",
  },
  {
    "0329":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044788/Exercises/0329_olnpfr.gif",
  },
  {
    "0330":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044787/Exercises/0330_h47fh7.gif",
  },
  {
    "0331":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044788/Exercises/0331_f5u3ue.gif",
  },
  {
    "0332":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044788/Exercises/0332_bsezif.gif",
  },
  {
    "0333":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044789/Exercises/0333_wdkcnp.gif",
  },
  {
    "0334":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044789/Exercises/0334_aris2j.gif",
  },
  {
    "0335":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044790/Exercises/0335_yvnoxz.gif",
  },
  {
    "0336":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044790/Exercises/0336_hjkck6.gif",
  },
  {
    "0337":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044790/Exercises/0337_gyqory.gif",
  },
  {
    "0338":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044790/Exercises/0338_gqtn0y.gif",
  },
  {
    "0863":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044912/Exercises/0863_gteudp.gif",
  },
  {
    "0339":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044791/Exercises/0339_soh7bb.gif",
  },
  {
    "0340":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044792/Exercises/0340_y0hpgl.gif",
  },
  {
    "0341":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044792/Exercises/0341_i0jeij.gif",
  },
  {
    "0343":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044792/Exercises/0343_ecoy0s.gif",
  },
  {
    "0342":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044793/Exercises/0342_inacpb.gif",
  },
  {
    "0344":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044793/Exercises/0344_b2qwxe.gif",
  },
  {
    "0345":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044793/Exercises/0345_a52axc.gif",
  },
  {
    "0346":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044794/Exercises/0346_qaibun.gif",
  },
  {
    "0347":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044794/Exercises/0347_dkytyr.gif",
  },
  {
    "0348":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044794/Exercises/0348_zh3xks.gif",
  },
  {
    "0349":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044794/Exercises/0349_gzjdzl.gif",
  },
  {
    "0350":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044795/Exercises/0350_ci5ppq.gif",
  },
  {
    "0351":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044795/Exercises/0351_gp95e4.gif",
  },
  {
    "0352":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044796/Exercises/0352_aftbfp.gif",
  },
  {
    "0292":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044775/Exercises/0292_w80dgv.gif",
  },
  {
    "0353":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044796/Exercises/0353_mwec1u.gif",
  },
  {
    "0354":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044796/Exercises/0354_hhdp8o.gif",
  },
  {
    "0355":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044796/Exercises/0355_smqqwf.gif",
  },
  {
    "0356":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044797/Exercises/0356_ysxvef.gif",
  },
  {
    1292: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044942/Exercises/1292_pxpgi9.gif",
  },
  {
    1293: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044942/Exercises/1293_ib3fr9.gif",
  },
  {
    1294: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044943/Exercises/1294_yoighr.gif",
  },
  {
    1295: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044943/Exercises/1295_yzc2zr.gif",
  },
  {
    1329: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044953/Exercises/1329_iwcbyf.gif",
  },
  {
    1330: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044953/Exercises/1330_mq8nmv.gif",
  },
  {
    1331: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044953/Exercises/1331_lvkgcp.gif",
  },
  {
    1379: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044967/Exercises/1379_sdvfsg.gif",
  },
  {
    1380: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044967/Exercises/1380_rhcels.gif",
  },
  {
    1381: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044967/Exercises/1381_vxlnce.gif",
  },
  {
    1414: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044976/Exercises/1414_aelwma.gif",
  },
  {
    1415: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044977/Exercises/1415_izrjqz.gif",
  },
  {
    1441: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044983/Exercises/1441_yokfng.gif",
  },
  {
    1459: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044985/Exercises/1459_ojbf7j.gif",
  },
  {
    1622: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044997/Exercises/1622_lpnvpn.gif",
  },
  {
    1623: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044997/Exercises/1623_jloj9b.gif",
  },
  {
    1624: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044998/Exercises/1624_ebvkac.gif",
  },
  {
    1667: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045011/Exercises/1667_zg7c0j.gif",
  },
  {
    1668: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045012/Exercises/1668_jzkmbs.gif",
  },
  {
    1669: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045012/Exercises/1669_r3x2pr.gif",
  },
  {
    1670: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045011/Exercises/1670_rxvq6s.gif",
  },
  {
    1671: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045012/Exercises/1671_tpg16k.gif",
  },
  {
    1672: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045013/Exercises/1672_i6w2sd.gif",
  },
  {
    1673: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045013/Exercises/1673_avaekd.gif",
  },
  {
    1674: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045013/Exercises/1674_cebctx.gif",
  },
  {
    1675: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045014/Exercises/1675_exbgny.gif",
  },
  {
    1676: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045014/Exercises/1676_smzye3.gif",
  },
  {
    1677: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045014/Exercises/1677_bhg0ll.gif",
  },
  {
    1678: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045015/Exercises/1678_eagns2.gif",
  },
  {
    1679: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045015/Exercises/1679_lfwzyp.gif",
  },
  {
    1700: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045018/Exercises/1700_dcqade.gif",
  },
  {
    1730: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045025/Exercises/1730_m6btvj.gif",
  },
  {
    1737: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045027/Exercises/1737_yrllx7.gif",
  },
  {
    1738: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045028/Exercises/1738_c24zq7.gif",
  },
  {
    1757: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045034/Exercises/1757_ucfkja.gif",
  },
  {
    2188: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045042/Exercises/2188_qzjsut.gif",
  },
  {
    2292: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045047/Exercises/2292_ovmdye.gif",
  },
  {
    2317: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045051/Exercises/2317_lzuix6.gif",
  },
  {
    2327: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045052/Exercises/2327_iacngr.gif",
  },
  {
    2397: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045055/Exercises/2397_vmmscu.gif",
  },
  {
    2805: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045067/Exercises/2805_z7lbam.gif",
  },
  {
    3546: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045103/Exercises/3546_bgii4d.gif",
  },
  {
    3547: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045103/Exercises/3547_fohfgy.gif",
  },
  {
    3548: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045103/Exercises/3548_ab62xi.gif",
  },
  {
    3664: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045111/Exercises/3664_lyrfr5.gif",
  },
  {
    3888: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045118/Exercises/3888_hgrynh.gif",
  },
  {
    "0358":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044798/Exercises/0358_azquji.gif",
  },
  {
    "0359":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044798/Exercises/0359_tvaofl.gif",
  },
  {
    "0361":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044798/Exercises/0361_vxwmga.gif",
  },
  {
    "0360":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044797/Exercises/0360_kpzvlu.gif",
  },
  {
    "0362":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044798/Exercises/0362_wciupe.gif",
  },
  {
    "0363":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044798/Exercises/0363_uzsmwo.gif",
  },
  {
    "0364":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044800/Exercises/0364_f2mauo.gif",
  },
  {
    "0365":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044800/Exercises/0365_kzv3pd.gif",
  },
  {
    "0366":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044800/Exercises/0366_iszmdl.gif",
  },
  {
    "0367":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044802/Exercises/0367_wfn0ai.gif",
  },
  {
    "0368":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044800/Exercises/0368_bbmul8.gif",
  },
  {
    "0369":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044801/Exercises/0369_nm3h4j.gif",
  },
  {
    "0370":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044802/Exercises/0370_u5mvuv.gif",
  },
  {
    "0371":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044802/Exercises/0371_a3rt83.gif",
  },
  {
    "0372":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044802/Exercises/0372_vqawgi.gif",
  },
  {
    "0373":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044802/Exercises/0373_iavdkg.gif",
  },
  {
    "0374":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044803/Exercises/0374_s6zlje.gif",
  },
  {
    "0375":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044803/Exercises/0375_n1huqk.gif",
  },
  {
    "0376":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044803/Exercises/0376_nrgt5o.gif",
  },
  {
    "0377":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044804/Exercises/0377_hybceb.gif",
  },
  {
    "0378":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044804/Exercises/0378_gaibxl.gif",
  },
  {
    "0380":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044805/Exercises/0380_j961px.gif",
  },
  {
    "0379":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044804/Exercises/0379_yyoc8s.gif",
  },
  {
    "0381":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044805/Exercises/0381_vdiumm.gif",
  },
  {
    "0382":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044805/Exercises/0382_hnhv9v.gif",
  },
  {
    "0383":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044806/Exercises/0383_boc3ty.gif",
  },
  {
    "0384":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044806/Exercises/0384_aouzau.gif",
  },
  {
    "0385":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044807/Exercises/0385_hpilrt.gif",
  },
  {
    "0386":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044807/Exercises/0386_ef94dv.gif",
  },
  {
    "0387":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044807/Exercises/0387_g9madf.gif",
  },
  {
    "0388":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044807/Exercises/0388_vlfant.gif",
  },
  {
    "0389":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044807/Exercises/0389_zjrgmk.gif",
  },
  {
    "0390":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044808/Exercises/0390_ht8jod.gif",
  },
  {
    "0391":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044808/Exercises/0391_cjbrjp.gif",
  },
  {
    "0392":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044809/Exercises/0392_rggrwy.gif",
  },
  {
    "0393":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044809/Exercises/0393_qr5lhb.gif",
  },
  {
    "0394":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044810/Exercises/0394_d4n1ta.gif",
  },
  {
    "0396":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044810/Exercises/0396_buk9rc.gif",
  },
  {
    "0395":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044810/Exercises/0395_w7dhmx.gif",
  },
  {
    "0397":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044810/Exercises/0397_ylqoua.gif",
  },
  {
    "0398":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044811/Exercises/0398_g8jful.gif",
  },
  {
    "0399":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044812/Exercises/0399_jnbdru.gif",
  },
  {
    "0400":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044812/Exercises/0400_yd8qfc.gif",
  },
  {
    "0401":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044812/Exercises/0401_n0tqrj.gif",
  },
  {
    "0402":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044812/Exercises/0402_jsgduf.gif",
  },
  {
    "0403":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044813/Exercises/0403_ry68lp.gif",
  },
  {
    "0405":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044813/Exercises/0405_li9f8q.gif",
  },
  {
    "0404":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044812/Exercises/0404_sr4jzj.gif",
  },
  {
    "0406":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044813/Exercises/0406_g7baza.gif",
  },
  {
    "0407":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044814/Exercises/0407_pxnqzr.gif",
  },
  {
    "0408":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044814/Exercises/0408_caysxk.gif",
  },
  {
    "0409":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044814/Exercises/0409_vdfzdt.gif",
  },
  {
    "0410":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044815/Exercises/0410_uoxjys.gif",
  },
  {
    "0411":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044815/Exercises/0411_dlrmgk.gif",
  },
  {
    1167: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044929/Exercises/1167_qddftf.gif",
  },
  {
    1296: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044943/Exercises/1296_q6btni.gif",
  },
  {
    1332: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044953/Exercises/1332_msjnzw.gif",
  },
  {
    1333: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044954/Exercises/1333_jd8wpd.gif",
  },
  {
    1334: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044954/Exercises/1334_bmh80p.gif",
  },
  {
    1335: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044955/Exercises/1335_vrw70p.gif",
  },
  {
    1336: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044955/Exercises/1336_o0cqe3.gif",
  },
  {
    1338: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044956/Exercises/1338_fhq0lx.gif",
  },
  {
    1339: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044955/Exercises/1339_yvzw16.gif",
  },
  {
    1341: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044955/Exercises/1341_n9wj6n.gif",
  },
  {
    1342: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044956/Exercises/1342_wpmjpk.gif",
  },
  {
    1343: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044957/Exercises/1343_omemxx.gif",
  },
  {
    1344: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044957/Exercises/1344_neplgt.gif",
  },
  {
    1382: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044967/Exercises/1382_re1n7i.gif",
  },
  {
    1416: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044976/Exercises/1416_lmdlgt.gif",
  },
  {
    1417: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044976/Exercises/1417_sbyven.gif",
  },
  {
    1458: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044985/Exercises/1458_yvi6fe.gif",
  },
  {
    1559: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044992/Exercises/1559_bvmuru.gif",
  },
  {
    1560: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044992/Exercises/1560_qa8fky.gif",
  },
  {
    1627: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044999/Exercises/1627_knwqmi.gif",
  },
  {
    1628: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044999/Exercises/1628_drir7r.gif",
  },
  {
    1680: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045015/Exercises/1680_stjpdk.gif",
  },
  {
    1682: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045016/Exercises/1682_cekzcu.gif",
  },
  {
    1684: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045016/Exercises/1684_u4dj7r.gif",
  },
  {
    1739: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045028/Exercises/1739_fiieoh.gif",
  },
  {
    1740: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045028/Exercises/1740_sj5gfr.gif",
  },
  {
    1741: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045028/Exercises/1741_gpei5z.gif",
  },
  {
    1742: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045029/Exercises/1742_dkmd4j.gif",
  },
  {
    1743: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045029/Exercises/1743_gu9mjz.gif",
  },
  {
    1744: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045030/Exercises/1744_b06i96.gif",
  },
  {
    1745: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045030/Exercises/1745_jngju5.gif",
  },
  {
    1746: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045030/Exercises/1746_m6qwqy.gif",
  },
  {
    1747: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045030/Exercises/1747_nnxywz.gif",
  },
  {
    1748: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045030/Exercises/1748_nvkf5b.gif",
  },
  {
    1749: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045030/Exercises/1749_apryjn.gif",
  },
  {
    1765: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045035/Exercises/1765_eqd9dd.gif",
  },
  {
    1772: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045037/Exercises/1772_xxt2rp.gif",
  },
  {
    2133: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045039/Exercises/2133_muhstt.gif",
  },
  {
    2143: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045042/Exercises/2143_z1tjzn.gif",
  },
  {
    2186: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045042/Exercises/2186_fhu2m9.gif",
  },
  {
    2189: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045043/Exercises/2189_aj3qna.gif",
  },
  {
    2293: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045048/Exercises/2293_ookchr.gif",
  },
  {
    2294: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045049/Exercises/2294_oeoc0e.gif",
  },
  {
    2321: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045051/Exercises/2321_ddgfl6.gif",
  },
  {
    2404: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045057/Exercises/2404_tncub8.gif",
  },
  {
    2432: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045060/Exercises/2432_bqda1n.gif",
  },
  {
    2741: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045064/Exercises/2741_hmutan.gif",
  },
  {
    2796: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045065/Exercises/2796_clpv9z.gif",
  },
  {
    2803: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045067/Exercises/2803_qale69.gif",
  },
  {
    2808: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045067/Exercises/2808_aeu5uj.gif",
  },
  {
    2812: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045069/Exercises/2812_ovnxkg.gif",
  },
  {
    3010: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045070/Exercises/3010_uexlqi.gif",
  },
  {
    3240: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045089/Exercises/3240_nus5nl.gif",
  },
  {
    3241: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045089/Exercises/3241_cfz6a9.gif",
  },
  {
    3287: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045090/Exercises/3287_dugspm.gif",
  },
  {
    3292: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045092/Exercises/3292_rvs8vj.gif",
  },
  {
    3303: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045095/Exercises/3303_jxpqyk.gif",
  },
  {
    3560: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045104/Exercises/3560_cuzefp.gif",
  },
  {
    5201: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045117/Exercises/5201_u2kuae.gif",
  },
  {
    "0413":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044815/Exercises/0413_b16zxi.gif",
  },
  {
    "0414":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044816/Exercises/0414_n9wn7y.gif",
  },
  {
    "0415":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044816/Exercises/0415_tx3rru.gif",
  },
  {
    "0416":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044816/Exercises/0416_iyhtra.gif",
  },
  {
    "0417":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044817/Exercises/0417_wipojo.gif",
  },
  {
    "0418":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044818/Exercises/0418_hpkmgw.gif",
  },
  {
    "0419":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044817/Exercises/0419_jwpm3y.gif",
  },
  {
    "0420":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044817/Exercises/0420_jriu9t.gif",
  },
  {
    "0421":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044818/Exercises/0421_cyprnn.gif",
  },
  {
    "0422":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044818/Exercises/0422_qfpmes.gif",
  },
  {
    "0423":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044818/Exercises/0423_tsob4u.gif",
  },
  {
    "0424":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044818/Exercises/0424_utty2r.gif",
  },
  {
    "0425":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044819/Exercises/0425_m2ubt8.gif",
  },
  {
    "0426":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044819/Exercises/0426_sdkgmi.gif",
  },
  {
    "0427":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044819/Exercises/0427_vn0mr4.gif",
  },
  {
    "0428":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044820/Exercises/0428_gdafhn.gif",
  },
  {
    "0429":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044820/Exercises/0429_gyxf6g.gif",
  },
  {
    "0430":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044820/Exercises/0430_pw7n2k.gif",
  },
  {
    "0431":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044820/Exercises/0431_oepivg.gif",
  },
  {
    "0432":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044821/Exercises/0432_malyj6.gif",
  },
  {
    "0433":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044822/Exercises/0433_out6s2.gif",
  },
  {
    "0434":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044822/Exercises/0434_q7xnxj.gif",
  },
  {
    "0436":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044822/Exercises/0436_yfr9ml.gif",
  },
  {
    "0437":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044822/Exercises/0437_jemu2b.gif",
  },
  {
    "0864":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044912/Exercises/0864_iectzw.gif",
  },
  {
    "0438":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044822/Exercises/0438_nwfsyp.gif",
  },
  {
    "0439":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044823/Exercises/0439_xoxw4c.gif",
  },
  {
    "0443":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044823/Exercises/0443_kjykil.gif",
  },
  {
    "0445":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044823/Exercises/0445_dcgypd.gif",
  },
  {
    "0446":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044824/Exercises/0446_ic3gjn.gif",
  },
  {
    "0447":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044824/Exercises/0447_mdleek.gif",
  },
  {
    "0448":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044824/Exercises/0448_xgycu3.gif",
  },
  {
    "0449":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044825/Exercises/0449_awtwdj.gif",
  },
  {
    "0450":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044826/Exercises/0450_dihmxf.gif",
  },
  {
    "0451":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044825/Exercises/0451_ouzgjw.gif",
  },
  {
    "0452":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044826/Exercises/0452_vhkp9a.gif",
  },
  {
    "0453":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044826/Exercises/0453_gxldvt.gif",
  },
  {
    "0454":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044826/Exercises/0454_tuzwue.gif",
  },
  {
    "0455":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044827/Exercises/0455_dejkbj.gif",
  },
  {
    "0456":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044827/Exercises/0456_uyyvyh.gif",
  },
  {
    "0457":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044827/Exercises/0457_lcnpeh.gif",
  },
  {
    1297: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044943/Exercises/1297_wut1rb.gif",
  },
  {
    1298: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044943/Exercises/1298_kpy4pf.gif",
  },
  {
    1383: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044968/Exercises/1383_kbercg.gif",
  },
  {
    1384: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044968/Exercises/1384_ds0yda.gif",
  },
  {
    1418: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044977/Exercises/1418_evxcvn.gif",
  },
  {
    1419: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044977/Exercises/1419_m8hibt.gif",
  },
  {
    1471: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044988/Exercises/1471_wzzzrx.gif",
  },
  {
    1472: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044988/Exercises/1472_yppvok.gif",
  },
  {
    1511: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044990/Exercises/1511_m7n918.gif",
  },
  {
    1564: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044992/Exercises/1564_ziiree.gif",
  },
  {
    1761: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045035/Exercises/1761_mong0w.gif",
  },
  {
    1764: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045035/Exercises/1764_e4ovde.gif",
  },
  {
    2139: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045040/Exercises/2139_kcocx1.gif",
  },
  {
    2298: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045048/Exercises/2298_mdaqpz.gif",
  },
  {
    2300: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045049/Exercises/2300_oujc8b.gif",
  },
  {
    2400: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045057/Exercises/2400_wftcto.gif",
  },
  {
    2429: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045060/Exercises/2429_njuewe.gif",
  },
  {
    2612: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045062/Exercises/2612_x37yfw.gif",
  },
  {
    3011: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045070/Exercises/3011_ek3bh0.gif",
  },
  {
    3193: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045078/Exercises/3193_ob9ycp.gif",
  },
  {
    3194: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045078/Exercises/3194_fdlvyt.gif",
  },
  {
    3202: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045080/Exercises/3202_t9jgr4.gif",
  },
  {
    3215: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045083/Exercises/3215_ldpmqi.gif",
  },
  {
    3218: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045084/Exercises/3218_xb51wq.gif",
  },
  {
    3221: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045086/Exercises/3221_l8xr5y.gif",
  },
  {
    3224: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045086/Exercises/3224_msfipj.gif",
  },
  {
    3234: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045086/Exercises/3234_nrt9t7.gif",
  },
  {
    3289: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045091/Exercises/3289_uum1gb.gif",
  },
  {
    3295: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045093/Exercises/3295_aylquc.gif",
  },
  {
    3296: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045093/Exercises/3296_mnglgj.gif",
  },
  {
    3299: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045094/Exercises/3299_ct8cnm.gif",
  },
  {
    3301: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045095/Exercises/3301_cdhx94.gif",
  },
  {
    3302: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045095/Exercises/3302_uff2xh.gif",
  },
  {
    3315: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045097/Exercises/3315_vzq7mz.gif",
  },
  {
    3327: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045098/Exercises/3327_ihvgfe.gif",
  },
  {
    3470: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045101/Exercises/3470_ttrvte.gif",
  },
  {
    3523: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045100/Exercises/3523_qu4pwg.gif",
  },
  {
    3561: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045106/Exercises/3561_x9vql8.gif",
  },
  {
    3636: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045105/Exercises/3636_chwmqb.gif",
  },
  {
    3698: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045115/Exercises/3698_pyww8s.gif",
  },
  {
    3785: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045116/Exercises/3785_ghchaa.gif",
  },
  {
    "0458":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044828/Exercises/0458_ufg5y1.gif",
  },
  {
    "0459":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044828/Exercises/0459_vsuwqh.gif",
  },
  {
    "0464":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044828/Exercises/0464_tsw27x.gif",
  },
  {
    "0466":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044828/Exercises/0466_ovktab.gif",
  },
  {
    "0467":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044828/Exercises/0467_qdv2bu.gif",
  },
  {
    "0469":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044829/Exercises/0469_ccvhkj.gif",
  },
  {
    "0471":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044829/Exercises/0471_ytlelm.gif",
  },
  {
    "0472":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044829/Exercises/0472_z6p6xe.gif",
  },
  {
    "0473":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044829/Exercises/0473_gzer3u.gif",
  },
  {
    "0474":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044830/Exercises/0474_su1it9.gif",
  },
  {
    "0475":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044830/Exercises/0475_nvvlvo.gif",
  },
  {
    "0476":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044831/Exercises/0476_umxeq7.gif",
  },
  {
    "0484":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044831/Exercises/0484_j0czeh.gif",
  },
  {
    "0489":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044831/Exercises/0489_rc9oe0.gif",
  },
  {
    "0488":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044831/Exercises/0488_e3hasz.gif",
  },
  {
    "0490":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044832/Exercises/0490_bstk3c.gif",
  },
  {
    "0491":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044832/Exercises/0491_xxvads.gif",
  },
  {
    "0492":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044833/Exercises/0492_xt5tzq.gif",
  },
  {
    "0493":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044833/Exercises/0493_pqfobm.gif",
  },
  {
    "0494":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044833/Exercises/0494_ssjkdz.gif",
  },
  {
    "0495":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044834/Exercises/0495_atsfpk.gif",
  },
  {
    "0496":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044833/Exercises/0496_eodn93.gif",
  },
  {
    "0499":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044835/Exercises/0499_ncgmoe.gif",
  },
  {
    "0497":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044834/Exercises/0497_w5eqjo.gif",
  },
  {
    "0498":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044835/Exercises/0498_boqyfq.gif",
  },
  {
    "0500":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044835/Exercises/0500_z2zqmi.gif",
  },
  {
    "0501":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044836/Exercises/0501_ulsn1b.gif",
  },
  {
    "0507":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044836/Exercises/0507_h8hg2o.gif",
  },
  {
    "0508":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044836/Exercises/0508_vmzmjq.gif",
  },
  {
    "0514":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044837/Exercises/0514_zjca80.gif",
  },
  {
    "0513":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044837/Exercises/0513_ktyb9e.gif",
  },
  {
    "0517":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044837/Exercises/0517_caesrx.gif",
  },
  {
    "0518":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044837/Exercises/0518_kwklj8.gif",
  },
  {
    "0520":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044838/Exercises/0520_o1njax.gif",
  },
  {
    "0519":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044838/Exercises/0519_vt2gb3.gif",
  },
  {
    "0521":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044839/Exercises/0521_atary4.gif",
  },
  {
    "0522":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044839/Exercises/0522_bfa8sz.gif",
  },
  {
    "0523":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044839/Exercises/0523_oi7cg2.gif",
  },
  {
    "0524":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044839/Exercises/0524_ue5k9n.gif",
  },
  {
    "0525":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044840/Exercises/0525_hanov1.gif",
  },
  {
    "0526":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044840/Exercises/0526_uqev2d.gif",
  },
  {
    "0527":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044841/Exercises/0527_dit5l2.gif",
  },
  {
    "0528":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044841/Exercises/0528_hqhiqh.gif",
  },
  {
    "0529":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044842/Exercises/0529_l7dslp.gif",
  },
  {
    "0530":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044841/Exercises/0530_dcev4e.gif",
  },
  {
    "0531":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044841/Exercises/0531_cq9k8d.gif",
  },
  {
    "0532":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044843/Exercises/0532_lqyb1d.gif",
  },
  {
    "0533":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044842/Exercises/0533_ns8atc.gif",
  },
  {
    "0534":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044843/Exercises/0534_eelaft.gif",
  },
  {
    "0535":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044843/Exercises/0535_ovhsjd.gif",
  },
  {
    "0536":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044843/Exercises/0536_l4debu.gif",
  },
  {
    "0537":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044844/Exercises/0537_imnntt.gif",
  },
  {
    "0538":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044844/Exercises/0538_asvk9b.gif",
  },
  {
    "0539":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044844/Exercises/0539_qdw5xs.gif",
  },
  {
    "0540":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044845/Exercises/0540_i4l4kb.gif",
  },
  {
    "0541":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044845/Exercises/0541_vtos2o.gif",
  },
  {
    "0542":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044845/Exercises/0542_e2b5dc.gif",
  },
  {
    "0543":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044845/Exercises/0543_bqcd8o.gif",
  },
  {
    "0544":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044846/Exercises/0544_x52rvv.gif",
  },
  {
    1253: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044930/Exercises/1253_hawdeu.gif",
  },
  {
    1299: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044944/Exercises/1299_x32v7q.gif",
  },
  {
    1300: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044945/Exercises/1300_vgwvjr.gif",
  },
  {
    1345: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044957/Exercises/1345_x5pi32.gif",
  },
  {
    1346: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044957/Exercises/1346_iejeoe.gif",
  },
  {
    1347: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044958/Exercises/1347_bfsnzg.gif",
  },
  {
    1348: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044958/Exercises/1348_gtpodk.gif",
  },
  {
    1349: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044959/Exercises/1349_qqa1sx.gif",
  },
  {
    1350: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044959/Exercises/1350_s0rsnh.gif",
  },
  {
    1351: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044959/Exercises/1351_c6jsvw.gif",
  },
  {
    1356: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044961/Exercises/1356_m6kv9w.gif",
  },
  {
    1385: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044969/Exercises/1385_i78vwv.gif",
  },
  {
    1420: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044978/Exercises/1420_vivtls.gif",
  },
  {
    1438: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044983/Exercises/1438_jkuwua.gif",
  },
  {
    1439: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044983/Exercises/1439_plvmby.gif",
  },
  {
    1451: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044984/Exercises/1451_lmnwd1.gif",
  },
  {
    1452: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044984/Exercises/1452_ta2e5f.gif",
  },
  {
    1479: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044989/Exercises/1479_gtqiyt.gif",
  },
  {
    1576: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044993/Exercises/1576_e2gooh.gif",
  },
  {
    1614: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044995/Exercises/1614_v3m9go.gif",
  },
  {
    1615: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044995/Exercises/1615_dyocml.gif",
  },
  {
    1616: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044996/Exercises/1616_skdsej.gif",
  },
  {
    2271: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045046/Exercises/2271_rk55dg.gif",
  },
  {
    2285: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045046/Exercises/2285_ehtsac.gif",
  },
  {
    2286: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045046/Exercises/2286_w1g8h5.gif",
  },
  {
    2287: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045047/Exercises/2287_lavcfs.gif",
  },
  {
    2288: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045047/Exercises/2288_ukpfjk.gif",
  },
  {
    2289: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045047/Exercises/2289_dxq7kq.gif",
  },
  {
    2315: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045050/Exercises/2315_dvcbi3.gif",
  },
  {
    2318: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045051/Exercises/2318_ymi4be.gif",
  },
  {
    2335: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045054/Exercises/2335_j8wkiw.gif",
  },
  {
    2611: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045063/Exercises/2611_rwfwyl.gif",
  },
  {
    2736: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045065/Exercises/2736_uyxyue.gif",
  },
  {
    3195: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045080/Exercises/3195_yqkyek.gif",
  },
  {
    3200: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045078/Exercises/3200_pchxpl.gif",
  },
  {
    3211: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045080/Exercises/3211_ibj5bh.gif",
  },
  {
    3237: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045088/Exercises/3237_he7mu1.gif",
  },
  {
    3239: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045088/Exercises/3239_yze1sl.gif",
  },
  {
    3288: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045090/Exercises/3288_xnuuxy.gif",
  },
  {
    3300: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045094/Exercises/3300_a4cvln.gif",
  },
  {
    3418: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045098/Exercises/3418_gbisfw.gif",
  },
  {
    3419: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045100/Exercises/3419_hj6olj.gif",
  },
  {
    3640: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045107/Exercises/3640_auue1c.gif",
  },
  {
    3758: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045116/Exercises/3758_hpqjcb.gif",
  },
  {
    3759: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045116/Exercises/3759_jhidcz.gif",
  },
  {
    3760: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045116/Exercises/3760_gd3ntm.gif",
  },
  {
    "0545":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044846/Exercises/0545_e6hx0j.gif",
  },
  {
    "0546":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044848/Exercises/0546_svbhrh.gif",
  },
  {
    "0547":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044847/Exercises/0547_zuusfi.gif",
  },
  {
    "0548":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044847/Exercises/0548_osiqse.gif",
  },
  {
    "0549":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044847/Exercises/0549_lhtavk.gif",
  },
  {
    "0550":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044847/Exercises/0550_hioy8x.gif",
  },
  {
    "0551":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044850/Exercises/0551_brp0oq.gif",
  },
  {
    "0552":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044849/Exercises/0552_akijrh.gif",
  },
  {
    "0553":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044848/Exercises/0553_vjhqco.gif",
  },
  {
    "0554":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044849/Exercises/0554_rxtr9a.gif",
  },
  {
    "0555":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044850/Exercises/0555_izg7sd.gif",
  },
  {
    "0558":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044849/Exercises/0558_rorf0v.gif",
  },
  {
    "0562":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044850/Exercises/0562_whkhul.gif",
  },
  {
    "0570":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044850/Exercises/0570_h3yuii.gif",
  },
  {
    "0571":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044851/Exercises/0571_orykdj.gif",
  },
  {
    "0572":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044851/Exercises/0572_pcpp6a.gif",
  },
  {
    "0573":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044851/Exercises/0573_ukovh7.gif",
  },
  {
    "0574":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044852/Exercises/0574_psw5zc.gif",
  },
  {
    "0575":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044853/Exercises/0575_g0vsen.gif",
  },
  {
    "0577":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044853/Exercises/0577_yaqnlz.gif",
  },
  {
    "0576":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044853/Exercises/0576_a7wyty.gif",
  },
  {
    "0578":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044853/Exercises/0578_gqtjsk.gif",
  },
  {
    "0579":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044854/Exercises/0579_pet78y.gif",
  },
  {
    "0580":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044855/Exercises/0580_ouxxft.gif",
  },
  {
    "0581":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044855/Exercises/0581_jhn5rf.gif",
  },
  {
    "0582":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044855/Exercises/0582_bff3nf.gif",
  },
  {
    "0583":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044855/Exercises/0583_w2puqa.gif",
  },
  {
    "0584":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044855/Exercises/0584_dcuh5u.gif",
  },
  {
    "0585":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044856/Exercises/0585_mmppbu.gif",
  },
  {
    "0586":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044857/Exercises/0586_jfcftq.gif",
  },
  {
    "0587":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044857/Exercises/0587_ky5lrc.gif",
  },
  {
    "0588":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044857/Exercises/0588_xfgkzw.gif",
  },
  {
    "0589":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044857/Exercises/0589_yz7zgs.gif",
  },
  {
    "0590":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044857/Exercises/0590_qnwaqa.gif",
  },
  {
    "0591":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044858/Exercises/0591_pf2ajk.gif",
  },
  {
    "0592":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044859/Exercises/0592_rzvozk.gif",
  },
  {
    "0593":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044859/Exercises/0593_rkwnz6.gif",
  },
  {
    "0594":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044859/Exercises/0594_ulouuu.gif",
  },
  {
    "0595":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044859/Exercises/0595_yawbt3.gif",
  },
  {
    "0596":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044859/Exercises/0596_pafb0k.gif",
  },
  {
    "0597":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044860/Exercises/0597_jkzxfr.gif",
  },
  {
    "0598":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044861/Exercises/0598_fqsm1r.gif",
  },
  {
    "0599":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044861/Exercises/0599_w11txr.gif",
  },
  {
    "0600":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044862/Exercises/0600_oux0gc.gif",
  },
  {
    "0602":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044862/Exercises/0602_xcwpiq.gif",
  },
  {
    "0601":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044862/Exercises/0601_cou2oo.gif",
  },
  {
    "0603":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044862/Exercises/0603_o1mizf.gif",
  },
  {
    "0869":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044914/Exercises/0869_fbzjyl.gif",
  },
  {
    "0604":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044863/Exercises/0604_uminct.gif",
  },
  {
    "0605":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044863/Exercises/0605_ahgsyb.gif",
  },
  {
    "0606":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044863/Exercises/0606_z1mvg8.gif",
  },
  {
    1301: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044945/Exercises/1301_gw6fcn.gif",
  },
  {
    1302: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044944/Exercises/1302_y2oiud.gif",
  },
  {
    1303: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044945/Exercises/1303_xgwlpv.gif",
  },
  {
    1304: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044945/Exercises/1304_hzjjc2.gif",
  },
  {
    1305: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044946/Exercises/1305_ewl6lv.gif",
  },
  {
    1306: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044947/Exercises/1306_k9j7y3.gif",
  },
  {
    1307: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044947/Exercises/1307_pgtpjb.gif",
  },
  {
    1312: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044949/Exercises/1312_swzl7i.gif",
  },
  {
    1313: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044949/Exercises/1313_tr0law.gif",
  },
  {
    1352: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044959/Exercises/1352_lgdoqj.gif",
  },
  {
    1353: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044959/Exercises/1353_nyfefi.gif",
  },
  {
    1354: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044959/Exercises/1354_huvjtz.gif",
  },
  {
    1355: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044960/Exercises/1355_axrcwh.gif",
  },
  {
    1386: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044969/Exercises/1386_xudlqt.gif",
  },
  {
    1387: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044968/Exercises/1387_kwnboe.gif",
  },
  {
    1388: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044969/Exercises/1388_lvye6r.gif",
  },
  {
    1389: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044970/Exercises/1389_e9lgjq.gif",
  },
  {
    1401: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044972/Exercises/1401_ep8bei.gif",
  },
  {
    1403: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044973/Exercises/1403_fbgbdm.gif",
  },
  {
    1421: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044978/Exercises/1421_cjhwaj.gif",
  },
  {
    1422: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044978/Exercises/1422_fasoyh.gif",
  },
  {
    1423: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044979/Exercises/1423_v0yni6.gif",
  },
  {
    1467: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044987/Exercises/1467_tjjtue.gif",
  },
  {
    1476: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044988/Exercises/1476_s7dhnu.gif",
  },
  {
    1495: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044990/Exercises/1495_bx6tea.gif",
  },
  {
    1582: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044993/Exercises/1582_iujksh.gif",
  },
  {
    1687: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045016/Exercises/1687_uudeui.gif",
  },
  {
    1688: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045017/Exercises/1688_fxuwfa.gif",
  },
  {
    1689: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045017/Exercises/1689_p1y2zg.gif",
  },
  {
    1701: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045018/Exercises/1701_zmpffp.gif",
  },
  {
    1707: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045018/Exercises/1707_he825t.gif",
  },
  {
    1750: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045031/Exercises/1750_mq1ndu.gif",
  },
  {
    1773: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045038/Exercises/1773_uvscxo.gif",
  },
  {
    2312: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045050/Exercises/2312_i4o4mz.gif",
  },
  {
    2328: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045052/Exercises/2328_gkhath.gif",
  },
  {
    3006: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045069/Exercises/3006_aa2kas.gif",
  },
  {
    3007: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045069/Exercises/3007_zxmrd4.gif",
  },
  {
    3013: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045070/Exercises/3013_g1wuhb.gif",
  },
  {
    3119: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045073/Exercises/3119_uftvyi.gif",
  },
  {
    3122: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045073/Exercises/3122_oxndpz.gif",
  },
  {
    3123: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045073/Exercises/3123_ipv2yz.gif",
  },
  {
    3124: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045074/Exercises/3124_x5ul2l.gif",
  },
  {
    3132: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045074/Exercises/3132_bh5unv.gif",
  },
  {
    3144: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045075/Exercises/3144_rncxio.gif",
  },
  {
    3145: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045075/Exercises/3145_nfzgd0.gif",
  },
  {
    3147: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045075/Exercises/3147_mlld93.gif",
  },
  {
    3201: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045078/Exercises/3201_jla0zr.gif",
  },
  {
    3203: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045080/Exercises/3203_ybbczn.gif",
  },
  {
    3217: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045083/Exercises/3217_s7ozbx.gif",
  },
  {
    3236: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045088/Exercises/3236_r5ls1h.gif",
  },
  {
    3533: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045101/Exercises/3533_cbfcfu.gif",
  },
  {
    3552: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045103/Exercises/3552_tz1otq.gif",
  },
  {
    3582: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045107/Exercises/3582_wwdxp2.gif",
  },
  {
    3638: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045108/Exercises/3638_lfqmjd.gif",
  },
  {
    3662: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045111/Exercises/3662_bq6n4m.gif",
  },
  {
    3663: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045112/Exercises/3663_czejf6.gif",
  },
  {
    3665: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045112/Exercises/3665_mseoyl.gif",
  },
  {
    "0607":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044864/Exercises/0607_evo1h5.gif",
  },
  {
    "0609":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044865/Exercises/0609_hdg4l1.gif",
  },
  {
    "0613":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044864/Exercises/0613_lvgrqh.gif",
  },
  {
    "0620":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044864/Exercises/0620_kdfjpk.gif",
  },
  {
    "0865":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044912/Exercises/0865_mfvmyp.gif",
  },
  {
    "0624":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044864/Exercises/0624_w019vi.gif",
  },
  {
    "0627":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044865/Exercises/0627_khk8hh.gif",
  },
  {
    "0628":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044865/Exercises/0628_phfahv.gif",
  },
  {
    "0630":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044866/Exercises/0630_hiaruj.gif",
  },
  {
    "0631":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044866/Exercises/0631_vi2trl.gif",
  },
  {
    "0634":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044866/Exercises/0634_cic4sc.gif",
  },
  {
    "0635":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044866/Exercises/0635_dlece8.gif",
  },
  {
    "0636":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044867/Exercises/0636_osmiew.gif",
  },
  {
    "0637":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044867/Exercises/0637_u0y4zw.gif",
  },
  {
    "0638":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044867/Exercises/0638_nbkg4e.gif",
  },
  {
    "0639":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044868/Exercises/0639_xh8yah.gif",
  },
  {
    "0640":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044868/Exercises/0640_cqdmvx.gif",
  },
  {
    "0641":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044868/Exercises/0641_epsxz5.gif",
  },
  {
    "0642":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044868/Exercises/0642_rrlu04.gif",
  },
  {
    "0643":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044868/Exercises/0643_ssprtx.gif",
  },
  {
    "0648":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044870/Exercises/0648_mxg5oz.gif",
  },
  {
    "0651":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044870/Exercises/0651_pkahhe.gif",
  },
  {
    "0650":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044869/Exercises/0650_rmivcl.gif",
  },
  {
    "0652":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044870/Exercises/0652_zkbq6a.gif",
  },
  {
    "0662":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044872/Exercises/0662_xdvli2.gif",
  },
  {
    "0653":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044870/Exercises/0653_mp3uuv.gif",
  },
  {
    "0655":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044870/Exercises/0655_aijwww.gif",
  },
  {
    "0656":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044871/Exercises/0656_hejdft.gif",
  },
  {
    "0659":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044872/Exercises/0659_uzjpdo.gif",
  },
  {
    "0658":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044871/Exercises/0658_udhmj4.gif",
  },
  {
    "0660":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044872/Exercises/0660_yuqac6.gif",
  },
  {
    "0661":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044872/Exercises/0661_tkjf3s.gif",
  },
  {
    "0663":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044873/Exercises/0663_tulzzi.gif",
  },
  {
    "0664":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044873/Exercises/0664_oz3ulc.gif",
  },
  {
    "0666":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044873/Exercises/0666_sltsvp.gif",
  },
  {
    "0668":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044874/Exercises/0668_ekkgrk.gif",
  },
  {
    "0669":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044873/Exercises/0669_ryssii.gif",
  },
  {
    "0670":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044874/Exercises/0670_pcahjo.gif",
  },
  {
    "0872":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044915/Exercises/0872_lwhhnv.gif",
  },
  {
    "0672":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044874/Exercises/0672_msn08k.gif",
  },
  {
    "0673":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044875/Exercises/0673_lllah2.gif",
  },
  {
    "0674":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044874/Exercises/0674_ok5avn.gif",
  },
  {
    "0675":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044875/Exercises/0675_m5jr5r.gif",
  },
  {
    1358: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044960/Exercises/1358_mruuy0.gif",
  },
  {
    1359: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044960/Exercises/1359_sixpjq.gif",
  },
  {
    1360: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044961/Exercises/1360_walvob.gif",
  },
  {
    1390: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044970/Exercises/1390_bu1vui.gif",
  },
  {
    1391: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044970/Exercises/1391_twewed.gif",
  },
  {
    1392: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044971/Exercises/1392_porsrt.gif",
  },
  {
    1393: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044971/Exercises/1393_i2w1ra.gif",
  },
  {
    1424: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044979/Exercises/1424_ufmqk7.gif",
  },
  {
    1425: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044979/Exercises/1425_s0sd1k.gif",
  },
  {
    1433: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044981/Exercises/1433_ekij5x.gif",
  },
  {
    1434: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044981/Exercises/1434_pvjqwg.gif",
  },
  {
    1463: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044986/Exercises/1463_uitoww.gif",
  },
  {
    1464: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044987/Exercises/1464_swvgw4.gif",
  },
  {
    1489: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044989/Exercises/1489_hmjsm0.gif",
  },
  {
    1496: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044990/Exercises/1496_pkw41r.gif",
  },
  {
    1585: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044993/Exercises/1585_ozdjw0.gif",
  },
  {
    1587: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044994/Exercises/1587_vvxgpw.gif",
  },
  {
    1625: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044997/Exercises/1625_lnpupp.gif",
  },
  {
    1626: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044998/Exercises/1626_bwodjd.gif",
  },
  {
    1683: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045016/Exercises/1683_g5yvyq.gif",
  },
  {
    1752: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045032/Exercises/1752_emwnvc.gif",
  },
  {
    1759: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045034/Exercises/1759_uxfn0s.gif",
  },
  {
    1763: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045034/Exercises/1763_l0ml7z.gif",
  },
  {
    1766: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045036/Exercises/1766_ssl2sa.gif",
  },
  {
    1774: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045038/Exercises/1774_sne796.gif",
  },
  {
    1775: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045038/Exercises/1775_b5fxpe.gif",
  },
  {
    2142: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045041/Exercises/2142_q4rfqw.gif",
  },
  {
    2202: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045044/Exercises/2202_zjj4qz.gif",
  },
  {
    2203: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045043/Exercises/2203_efkmuo.gif",
  },
  {
    2204: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045043/Exercises/2204_wuflvb.gif",
  },
  {
    2205: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045044/Exercises/2205_hszxvl.gif",
  },
  {
    2206: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045044/Exercises/2206_bswfh8.gif",
  },
  {
    2207: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045045/Exercises/2207_ew5j2l.gif",
  },
  {
    2208: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045044/Exercises/2208_c23tax.gif",
  },
  {
    2209: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045045/Exercises/2209_hgejee.gif",
  },
  {
    2334: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045053/Exercises/2334_dledps.gif",
  },
  {
    2567: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045062/Exercises/2567_g3egvu.gif",
  },
  {
    2571: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045062/Exercises/2571_altdpd.gif",
  },
  {
    3012: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045070/Exercises/3012_y8im5s.gif",
  },
  {
    3021: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045072/Exercises/3021_rk5y5u.gif",
  },
  {
    3213: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045082/Exercises/3213_gd6qn3.gif",
  },
  {
    3219: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045084/Exercises/3219_lp0xvd.gif",
  },
  {
    3222: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045085/Exercises/3222_po4hri.gif",
  },
  {
    3281: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045090/Exercises/3281_lryahq.gif",
  },
  {
    3304: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045096/Exercises/3304_hgp1v1.gif",
  },
  {
    3361: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045099/Exercises/3361_nhp1z2.gif",
  },
  {
    3645: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045109/Exercises/3645_pil3yf.gif",
  },
  {
    3656: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045111/Exercises/3656_qxoavl.gif",
  },
  {
    3667: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045112/Exercises/3667_xbdbrm.gif",
  },
  {
    3671: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045114/Exercises/3671_sm5rbd.gif",
  },
  {
    3679: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045114/Exercises/3679_kh8m6j.gif",
  },
  {
    3699: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045117/Exercises/3699_k9ptti.gif",
  },
  {
    "0677":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044875/Exercises/0677_zrx58t.gif",
  },
  {
    "0678":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044876/Exercises/0678_mhiaut.gif",
  },
  {
    "0680":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044876/Exercises/0680_gtw1jl.gif",
  },
  {
    "0685":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044876/Exercises/0685_fvowbn.gif",
  },
  {
    "0684":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044876/Exercises/0684_bhd4re.gif",
  },
  {
    "0687":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044878/Exercises/0687_kuw6ks.gif",
  },
  {
    "0688":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044877/Exercises/0688_wllnfl.gif",
  },
  {
    "0689":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044878/Exercises/0689_rp2oal.gif",
  },
  {
    "0690":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044878/Exercises/0690_end6h3.gif",
  },
  {
    "0691":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044878/Exercises/0691_jy3tsh.gif",
  },
  {
    "0697":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044880/Exercises/0697_efwp3p.gif",
  },
  {
    "0696":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044880/Exercises/0696_jq68gh.gif",
  },
  {
    "0699":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044880/Exercises/0699_qec9fk.gif",
  },
  {
    "0705":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044880/Exercises/0705_c7g0qs.gif",
  },
  {
    "0709":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044880/Exercises/0709_ao8jup.gif",
  },
  {
    "0710":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044881/Exercises/0710_wvw4ni.gif",
  },
  {
    "0716":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044881/Exercises/0716_qtolw1.gif",
  },
  {
    "0717":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044882/Exercises/0717_siazjz.gif",
  },
  {
    "0721":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044882/Exercises/0721_zrrvqe.gif",
  },
  {
    "0720":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044882/Exercises/0720_vtauxi.gif",
  },
  {
    "0725":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044883/Exercises/0725_hgcsew.gif",
  },
  {
    "0727":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044883/Exercises/0727_lmaiez.gif",
  },
  {
    "0730":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044883/Exercises/0730_hljrbf.gif",
  },
  {
    "0735":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044884/Exercises/0735_kpqemb.gif",
  },
  {
    "0738":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044884/Exercises/0738_wnsjpq.gif",
  },
  {
    "0739":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044885/Exercises/0739_wdu21w.gif",
  },
  {
    "0740":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044885/Exercises/0740_hjgnxo.gif",
  },
  {
    "0741":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044885/Exercises/0741_eybwwl.gif",
  },
  {
    "0742":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044886/Exercises/0742_nk8yjk.gif",
  },
  {
    "0743":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044886/Exercises/0743_njvf8q.gif",
  },
  {
    "0744":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044887/Exercises/0744_d3savd.gif",
  },
  {
    "0746":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044887/Exercises/0746_hz3dyl.gif",
  },
  {
    "0747":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044887/Exercises/0747_wneozc.gif",
  },
  {
    "0748":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044889/Exercises/0748_nf7ppg.gif",
  },
  {
    "0749":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044888/Exercises/0749_ti2xlj.gif",
  },
  {
    "0750":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044889/Exercises/0750_p0e8pp.gif",
  },
  {
    "0751":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044889/Exercises/0751_inwlda.gif",
  },
  {
    "0752":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044889/Exercises/0752_lz0jsi.gif",
  },
  {
    "0753":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044890/Exercises/0753_ixnh1f.gif",
  },
  {
    "0754":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044891/Exercises/0754_zjkjmw.gif",
  },
  {
    "0755":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044891/Exercises/0755_iqktaw.gif",
  },
  {
    "0756":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044891/Exercises/0756_rwxac9.gif",
  },
  {
    "0757":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044891/Exercises/0757_q6pzhk.gif",
  },
  {
    "0758":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044892/Exercises/0758_mp8yto.gif",
  },
  {
    "0759":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044893/Exercises/0759_wthrcp.gif",
  },
  {
    "0760":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044892/Exercises/0760_cymhly.gif",
  },
  {
    "0761":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044892/Exercises/0761_hylt1e.gif",
  },
  {
    "0762":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044892/Exercises/0762_zmf7mb.gif",
  },
  {
    1308: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044947/Exercises/1308_krtetc.gif",
  },
  {
    1309: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044947/Exercises/1309_g7v0qu.gif",
  },
  {
    1310: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044948/Exercises/1310_bxaqpm.gif",
  },
  {
    1361: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044962/Exercises/1361_zaf0xw.gif",
  },
  {
    1362: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044961/Exercises/1362_jgvzwr.gif",
  },
  {
    1363: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044963/Exercises/1363_unswre.gif",
  },
  {
    1364: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044962/Exercises/1364_y9sopf.gif",
  },
  {
    1365: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044963/Exercises/1365_eusxyn.gif",
  },
  {
    1366: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044962/Exercises/1366_vtqwbl.gif",
  },
  {
    1394: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044971/Exercises/1394_jrbpwx.gif",
  },
  {
    1395: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044972/Exercises/1395_j6mhtb.gif",
  },
  {
    1396: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044972/Exercises/1396_b2ubtr.gif",
  },
  {
    1397: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044972/Exercises/1397_k6t8lw.gif",
  },
  {
    1398: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044973/Exercises/1398_nkuboi.gif",
  },
  {
    1426: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044979/Exercises/1426_frivhc.gif",
  },
  {
    1427: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044980/Exercises/1427_hvtfjl.gif",
  },
  {
    1460: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044986/Exercises/1460_xdkus9.gif",
  },
  {
    1466: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044987/Exercises/1466_h7bukk.gif",
  },
  {
    1490: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044990/Exercises/1490_szew1w.gif",
  },
  {
    1599: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044994/Exercises/1599_lvabfm.gif",
  },
  {
    1685: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045016/Exercises/1685_yzd39q.gif",
  },
  {
    1686: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045016/Exercises/1686_f3wij8.gif",
  },
  {
    1705: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045018/Exercises/1705_tyt51h.gif",
  },
  {
    1753: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045032/Exercises/1753_mfux1c.gif",
  },
  {
    2135: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045038/Exercises/2135_je68p9.gif",
  },
  {
    2138: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045040/Exercises/2138_iqwoqd.gif",
  },
  {
    2141: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045041/Exercises/2141_nyzv7y.gif",
  },
  {
    2297: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045049/Exercises/2297_r2hjjt.gif",
  },
  {
    2311: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045049/Exercises/2311_pbzu3f.gif",
  },
  {
    2329: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045052/Exercises/2329_djayr6.gif",
  },
  {
    2368: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045055/Exercises/2368_r3ruih.gif",
  },
  {
    2459: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045060/Exercises/2459_s02nfh.gif",
  },
  {
    2801: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045067/Exercises/2801_cflwdf.gif",
  },
  {
    2802: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045067/Exercises/2802_ge7xcg.gif",
  },
  {
    2987: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045068/Exercises/2987_hrrefx.gif",
  },
  {
    3142: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045075/Exercises/3142_oritzj.gif",
  },
  {
    3223: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045086/Exercises/3223_nu4ywc.gif",
  },
  {
    3231: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045087/Exercises/3231_l34dmo.gif",
  },
  {
    3286: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045090/Exercises/3286_ojulko.gif",
  },
  {
    3290: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045091/Exercises/3290_m48mky.gif",
  },
  {
    3291: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045091/Exercises/3291_djesaf.gif",
  },
  {
    3298: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045093/Exercises/3298_bo8qsm.gif",
  },
  {
    3312: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045095/Exercises/3312_qmnhe7.gif",
  },
  {
    3314: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045097/Exercises/3314_p26xud.gif",
  },
  {
    3318: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045097/Exercises/3318_xhhrp7.gif",
  },
  {
    3420: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045099/Exercises/3420_abzalr.gif",
  },
  {
    3433: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045100/Exercises/3433_nnjb8e.gif",
  },
  {
    3641: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045108/Exercises/3641_osqndv.gif",
  },
  {
    3643: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045109/Exercises/3643_gflue8.gif",
  },
  {
    3644: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045110/Exercises/3644_xdcxvu.gif",
  },
  {
    3655: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045110/Exercises/3655_ikzefx.gif",
  },
  {
    3666: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045113/Exercises/3666_mwu7mf.gif",
  },
  {
    3669: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045113/Exercises/3669_vxt0ib.gif",
  },
  {
    3670: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045113/Exercises/3670_yefz5p.gif",
  },
  {
    "0763":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044893/Exercises/0763_a2iyaf.gif",
  },
  {
    "0764":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044894/Exercises/0764_ayi1o8.gif",
  },
  {
    "0765":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044894/Exercises/0765_gaaand.gif",
  },
  {
    "0766":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044894/Exercises/0766_urdrvy.gif",
  },
  {
    "0767":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044894/Exercises/0767_iuxcwe.gif",
  },
  {
    "0768":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044895/Exercises/0768_wshlqs.gif",
  },
  {
    "0769":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044895/Exercises/0769_chupxt.gif",
  },
  {
    "0770":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044895/Exercises/0770_e1sejv.gif",
  },
  {
    "0771":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044896/Exercises/0771_sk23uf.gif",
  },
  {
    "0772":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044896/Exercises/0772_thawoc.gif",
  },
  {
    "0773":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044896/Exercises/0773_qbuvl0.gif",
  },
  {
    "0774":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044897/Exercises/0774_n5mt1n.gif",
  },
  {
    "0775":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044897/Exercises/0775_xfbjdu.gif",
  },
  {
    "0776":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044898/Exercises/0776_cumatg.gif",
  },
  {
    "0777":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044898/Exercises/0777_wnxmka.gif",
  },
  {
    "0778":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044897/Exercises/0778_vujbbx.gif",
  },
  {
    "0786":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044899/Exercises/0786_c3767k.gif",
  },
  {
    "0788":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044898/Exercises/0788_j5qi7b.gif",
  },
  {
    "0794":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044899/Exercises/0794_ppyw5y.gif",
  },
  {
    "0795":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044899/Exercises/0795_cemtnx.gif",
  },
  {
    "0796":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044899/Exercises/0796_d7rywa.gif",
  },
  {
    "0798":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044899/Exercises/0798_eygrgi.gif",
  },
  {
    "0803":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044900/Exercises/0803_ve4z8j.gif",
  },
  {
    "0805":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044900/Exercises/0805_nchobx.gif",
  },
  {
    "0806":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044901/Exercises/0806_enfaly.gif",
  },
  {
    "0807":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044900/Exercises/0807_ggpkgn.gif",
  },
  {
    "0808":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044901/Exercises/0808_hd0pyz.gif",
  },
  {
    "0809":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044901/Exercises/0809_jnjygz.gif",
  },
  {
    "0811":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044902/Exercises/0811_zfazvv.gif",
  },
  {
    "0814":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044902/Exercises/0814_j0auz8.gif",
  },
  {
    "0812":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044902/Exercises/0812_eb8oed.gif",
  },
  {
    "0813":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044902/Exercises/0813_w09kb9.gif",
  },
  {
    "0815":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044903/Exercises/0815_mlnfc9.gif",
  },
  {
    "0816":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044903/Exercises/0816_arpdwx.gif",
  },
  {
    "0817":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044903/Exercises/0817_tkc8gz.gif",
  },
  {
    "0871":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044914/Exercises/0871_rvcygn.gif",
  },
  {
    "0818":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044904/Exercises/0818_slkwzs.gif",
  },
  {
    "0826":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044904/Exercises/0826_jaqhp7.gif",
  },
  {
    "0830":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044904/Exercises/0830_wbvaeq.gif",
  },
  {
    "0832":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044905/Exercises/0832_rupnrm.gif",
  },
  {
    "0833":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044905/Exercises/0833_gxqohu.gif",
  },
  {
    "0834":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044905/Exercises/0834_rvbcbj.gif",
  },
  {
    "0866":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044913/Exercises/0866_wm4kir.gif",
  },
  {
    "0835":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044906/Exercises/0835_f5xmzt.gif",
  },
  {
    "0840":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044906/Exercises/0840_bsakve.gif",
  },
  {
    "0841":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044906/Exercises/0841_ouxkg2.gif",
  },
  {
    1311: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044948/Exercises/1311_e89r99.gif",
  },
  {
    1367: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044963/Exercises/1367_tua0ou.gif",
  },
  {
    1428: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044979/Exercises/1428_benlku.gif",
  },
  {
    1429: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044980/Exercises/1429_bzgevo.gif",
  },
  {
    1604: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044995/Exercises/1604_sfupax.gif",
  },
  {
    1754: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045032/Exercises/1754_nrzlr7.gif",
  },
  {
    1755: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045032/Exercises/1755_aizpoh.gif",
  },
  {
    1767: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045036/Exercises/1767_bb9jrj.gif",
  },
  {
    2363: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045054/Exercises/2363_v01tg8.gif",
  },
  {
    2371: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045055/Exercises/2371_audp7i.gif",
  },
  {
    3313: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045096/Exercises/3313_zjajpo.gif",
  },
  {
    3637: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045108/Exercises/3637_nxfumq.gif",
  },
  {
    3642: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662045109/Exercises/3642_gri7fu.gif",
  },
  {
    "0844":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044907/Exercises/0844_ciinyh.gif",
  },
  {
    "0846":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044907/Exercises/0846_kgs9kb.gif",
  },
  {
    "0845":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044907/Exercises/0845_tedqjw.gif",
  },
  {
    "0847":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044908/Exercises/0847_fr05kn.gif",
  },
  {
    "0849":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044909/Exercises/0849_cwrfii.gif",
  },
  {
    "0850":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044908/Exercises/0850_avn5op.gif",
  },
  {
    "0851":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044909/Exercises/0851_svth6f.gif",
  },
  {
    "0852":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044909/Exercises/0852_j3tcm8.gif",
  },
  {
    "0853":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044909/Exercises/0853_dcx8n5.gif",
  },
  {
    "0854":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044910/Exercises/0854_lxeueb.gif",
  },
  {
    "0856":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044910/Exercises/0856_kvguty.gif",
  },
  {
    "0857":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044910/Exercises/0857_hzspjd.gif",
  },
  {
    "0858":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1662044911/Exercises/0858_to6c6b.gif",
  },
  {
    1455: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1664558445/Exercises/1455_r3erkp.gif",
  },
  {
    1454: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1664558445/Exercises/1454_ynbkyq.gif",
  },
  {
    1453: "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1664558445/Exercises/1453_qcnj8f.gif",
  },
  {
    "0859":
      "https://res.cloudinary.com/dvhlbmfcd/image/upload/v1664558445/Exercises/0859_x0zaix.gif",
  },
];

export default urls;
