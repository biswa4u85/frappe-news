import React from "react";

function Loader() {
    return (<div class="preloader-wrapper">
        <svg width="1581" id="place-heading" viewBox="0 0 1581 219" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="1581" height="219" fill="black">
                <rect fill="white" width="1581" height="219" />
                <path d="M8.54158 214.986C6.53049 214.986 4.72051 214.283 3.11164 212.876C1.70388 211.269 1 209.461 1 207.451V11.5486C1 9.33843 1.70388 7.53009 3.11164 6.12362C4.72051 4.71713 6.53049 4.01389 8.54158 4.01389H40.5179C45.5456 4.01389 48.9645 5.92268 50.7744 9.74027L124.38 125.474V11.5486C124.38 9.33843 125.084 7.53009 126.492 6.12362C128.101 4.71713 129.911 4.01389 131.922 4.01389H168.121C170.334 4.01389 172.144 4.71713 173.551 6.12362C174.959 7.53009 175.663 9.33843 175.663 11.5486V207.15C175.663 209.36 174.959 211.269 173.551 212.876C172.144 214.283 170.334 214.986 168.121 214.986H135.843C131.419 214.986 128.101 213.077 125.889 209.26L52.2828 97.7458V207.451C52.2828 209.461 51.5789 211.269 50.1711 212.876C48.7634 214.283 46.9534 214.986 44.7412 214.986H8.54158ZM225.362 214.986C223.351 214.986 221.541 214.283 219.932 212.876C218.524 211.269 217.82 209.461 217.82 207.451V11.5486C217.82 9.33843 218.524 7.53009 219.932 6.12362C221.541 4.71713 223.351 4.01389 225.362 4.01389H366.239C368.451 4.01389 370.261 4.71713 371.669 6.12362C373.077 7.53009 373.78 9.33843 373.78 11.5486V39.8792C373.78 41.8884 373.077 43.6968 371.669 45.3042C370.261 46.7106 368.451 47.4139 366.239 47.4139H270.008V88.1014H359.602C361.814 88.1014 363.624 88.9051 365.032 90.5125C366.44 91.919 367.144 93.7273 367.144 95.9375V122.158C367.144 124.168 366.44 125.976 365.032 127.583C363.624 128.99 361.814 129.693 359.602 129.693H270.008V171.586H368.652C370.864 171.586 372.674 172.289 374.082 173.696C375.49 175.102 376.194 176.911 376.194 179.121V207.451C376.194 209.461 375.49 211.269 374.082 212.876C372.674 214.283 370.864 214.986 368.652 214.986H225.362ZM444.271 214.986C440.852 214.986 438.137 214.082 436.126 212.274C434.115 210.264 432.908 207.853 432.506 205.04L399.624 12.4528C399.423 11.85 399.323 11.1468 399.323 10.3431C399.323 8.73565 399.926 7.32917 401.133 6.12362C402.541 4.71713 404.049 4.01389 405.658 4.01389H443.064C448.695 4.01389 451.812 6.22407 452.415 10.6444L472.024 128.186L493.743 58.8667C495.956 53.4417 499.274 50.7292 503.698 50.7292H525.418C530.446 50.7292 533.764 53.4417 535.373 58.8667L557.093 128.186L576.701 10.6444C577.304 6.22407 580.421 4.01389 586.052 4.01389H623.459C625.269 4.01389 626.777 4.71713 627.984 6.12362C629.391 7.32917 630.095 8.73565 630.095 10.3431L629.794 12.4528L596.912 205.04C596.51 207.853 595.203 210.264 592.991 212.274C590.98 214.082 588.365 214.986 585.147 214.986H556.489C553.272 214.986 550.758 214.182 548.948 212.575C547.138 210.968 545.831 209.159 545.026 207.15L514.558 120.953L484.09 207.15C482.28 212.374 478.56 214.986 472.929 214.986H444.271ZM738.739 218C719.633 218 703.243 215.187 689.568 209.561C675.892 203.935 665.535 196.601 658.496 187.56C651.659 178.317 648.039 168.271 647.636 157.421C647.636 155.813 648.24 154.407 649.446 153.201C650.854 151.795 652.463 151.092 654.273 151.092H692.283C694.696 151.092 696.606 151.594 698.014 152.599C699.623 153.402 701.232 154.708 702.841 156.517C705.455 161.741 709.679 166.061 715.511 169.476C721.343 172.892 729.086 174.6 738.739 174.6C750.202 174.6 758.95 172.792 764.983 169.175C771.017 165.558 774.033 160.636 774.033 154.407C774.033 149.987 772.424 146.37 769.207 143.557C766.19 140.744 761.363 138.232 754.727 136.022C748.09 133.812 738.236 131.3 725.164 128.487C701.031 123.464 682.931 116.131 670.865 106.486C658.999 96.6407 653.066 82.6764 653.066 64.5931C653.066 52.3366 656.485 41.3861 663.323 31.7417C670.161 22.0972 679.914 14.5625 692.584 9.1375C705.254 3.7125 720.036 1 736.929 1C754.425 1 769.609 4.01389 782.48 10.0417C795.351 16.0694 805.105 23.7046 811.741 32.9472C818.579 41.9889 822.199 50.9301 822.601 59.7708C822.601 61.5792 821.998 63.0861 820.791 64.2917C819.585 65.4972 818.076 66.1 816.266 66.1H776.447C774.033 66.1 772.022 65.6981 770.413 64.8944C769.006 64.0907 767.698 62.7847 766.492 60.9764C765.285 56.3551 761.967 52.437 756.537 49.2222C751.308 46.0074 744.772 44.4 736.929 44.4C727.879 44.4 720.941 46.0074 716.114 49.2222C711.287 52.437 708.874 57.1588 708.874 63.3875C708.874 67.6069 710.181 71.1231 712.796 73.9361C715.611 76.7491 720.036 79.3611 726.069 81.7722C732.303 83.9824 741.152 86.2931 752.615 88.7042C771.318 92.1199 786.2 96.4398 797.261 101.664C808.524 106.687 816.769 113.318 821.998 121.556C827.227 129.593 829.841 139.739 829.841 151.996C829.841 165.458 825.919 177.212 818.076 187.258C810.434 197.104 799.675 204.739 785.798 210.164C772.123 215.388 756.436 218 738.739 218ZM913.001 214.986C906.566 214.986 902.443 211.972 900.633 205.944L839.094 13.0556L838.49 10.3431C838.49 8.73565 839.094 7.32917 840.3 6.12362C841.708 4.71713 843.317 4.01389 845.127 4.01389H882.533C885.349 4.01389 887.661 4.81759 889.471 6.425C891.483 8.03241 892.79 9.84075 893.393 11.85L936.229 151.092L978.764 11.85C979.367 9.84075 980.574 8.03241 982.384 6.425C984.395 4.81759 986.808 4.01389 989.624 4.01389H1027.33C1028.94 4.01389 1030.35 4.71713 1031.55 6.12362C1032.96 7.32917 1033.67 8.73565 1033.67 10.3431L1033.06 13.0556L971.524 205.944C969.714 211.972 965.591 214.986 959.156 214.986H913.001ZM1141.33 218C1112.97 218 1090.65 211.068 1074.36 197.204C1058.07 183.34 1049.42 162.946 1048.42 136.022C1048.22 130.195 1048.12 121.556 1048.12 110.103C1048.12 98.4491 1048.22 89.7088 1048.42 83.8819C1049.42 57.3597 1058.17 36.9657 1074.66 22.7C1091.35 8.23334 1113.58 1 1141.33 1C1169.08 1 1191.31 8.23334 1208 22.7C1224.69 36.9657 1233.44 57.3597 1234.24 83.8819C1234.64 95.5356 1234.85 104.276 1234.85 110.103C1234.85 115.729 1234.64 124.369 1234.24 136.022C1233.24 162.946 1224.59 183.34 1208.3 197.204C1192.01 211.068 1169.69 218 1141.33 218ZM1141.33 174.6C1152.39 174.6 1161.14 171.285 1167.57 164.654C1174.21 158.024 1177.73 147.877 1178.13 134.214C1178.53 122.56 1178.74 114.322 1178.74 109.5C1178.74 104.276 1178.53 96.038 1178.13 84.7861C1177.73 71.1232 1174.21 60.9764 1167.57 54.3458C1160.94 47.7153 1152.19 44.4 1141.33 44.4C1130.47 44.4 1121.72 47.7153 1115.08 54.3458C1108.65 60.9764 1105.13 71.1232 1104.53 84.7861C1104.33 90.412 1104.22 98.65 1104.22 109.5C1104.22 120.149 1104.33 128.387 1104.53 134.214C1105.13 147.877 1108.65 158.024 1115.08 164.654C1121.52 171.285 1130.27 174.6 1141.33 174.6ZM1277.35 214.986C1275.34 214.986 1273.53 214.283 1271.92 212.876C1270.52 211.269 1269.81 209.461 1269.81 207.451V11.5486C1269.81 9.33843 1270.52 7.53009 1271.92 6.12362C1273.53 4.71713 1275.34 4.01389 1277.35 4.01389H1317.17C1319.39 4.01389 1321.2 4.71713 1322.6 6.12362C1324.01 7.53009 1324.71 9.33843 1324.71 11.5486V169.476H1416.12C1418.33 169.476 1420.14 170.28 1421.55 171.887C1422.96 173.294 1423.66 175.102 1423.66 177.312V207.451C1423.66 209.461 1422.96 211.269 1421.55 212.876C1420.14 214.283 1418.33 214.986 1416.12 214.986H1277.35ZM1471.4 214.986C1469.39 214.986 1467.58 214.283 1465.97 212.876C1464.56 211.269 1463.86 209.461 1463.86 207.451V51.3319H1410.16C1408.15 51.3319 1406.34 50.6287 1404.73 49.2222C1403.33 47.6148 1402.62 45.8065 1402.62 43.7972V11.5486C1402.62 9.33843 1403.33 7.53009 1404.73 6.12362C1406.34 4.71713 1408.15 4.01389 1410.16 4.01389H1572.46C1574.67 4.01389 1576.48 4.71713 1577.89 6.12362C1579.3 7.53009 1580 9.33843 1580 11.5486V43.7972C1580 46.0074 1579.3 47.8157 1577.89 49.2222C1576.48 50.6287 1574.67 51.3319 1572.46 51.3319H1518.76V207.451C1518.76 209.461 1518.06 211.269 1516.65 212.876C1515.24 214.283 1513.43 214.986 1511.22 214.986H1471.4Z" />
            </mask>
            <path d="M8.54158 214.986C6.53049 214.986 4.72051 214.283 3.11164 212.876C1.70388 211.269 1 209.461 1 207.451V11.5486C1 9.33843 1.70388 7.53009 3.11164 6.12362C4.72051 4.71713 6.53049 4.01389 8.54158 4.01389H40.5179C45.5456 4.01389 48.9645 5.92268 50.7744 9.74027L124.38 125.474V11.5486C124.38 9.33843 125.084 7.53009 126.492 6.12362C128.101 4.71713 129.911 4.01389 131.922 4.01389H168.121C170.334 4.01389 172.144 4.71713 173.551 6.12362C174.959 7.53009 175.663 9.33843 175.663 11.5486V207.15C175.663 209.36 174.959 211.269 173.551 212.876C172.144 214.283 170.334 214.986 168.121 214.986H135.843C131.419 214.986 128.101 213.077 125.889 209.26L52.2828 97.7458V207.451C52.2828 209.461 51.5789 211.269 50.1711 212.876C48.7634 214.283 46.9534 214.986 44.7412 214.986H8.54158ZM225.362 214.986C223.351 214.986 221.541 214.283 219.932 212.876C218.524 211.269 217.82 209.461 217.82 207.451V11.5486C217.82 9.33843 218.524 7.53009 219.932 6.12362C221.541 4.71713 223.351 4.01389 225.362 4.01389H366.239C368.451 4.01389 370.261 4.71713 371.669 6.12362C373.077 7.53009 373.78 9.33843 373.78 11.5486V39.8792C373.78 41.8884 373.077 43.6968 371.669 45.3042C370.261 46.7106 368.451 47.4139 366.239 47.4139H270.008V88.1014H359.602C361.814 88.1014 363.624 88.9051 365.032 90.5125C366.44 91.919 367.144 93.7273 367.144 95.9375V122.158C367.144 124.168 366.44 125.976 365.032 127.583C363.624 128.99 361.814 129.693 359.602 129.693H270.008V171.586H368.652C370.864 171.586 372.674 172.289 374.082 173.696C375.49 175.102 376.194 176.911 376.194 179.121V207.451C376.194 209.461 375.49 211.269 374.082 212.876C372.674 214.283 370.864 214.986 368.652 214.986H225.362ZM444.271 214.986C440.852 214.986 438.137 214.082 436.126 212.274C434.115 210.264 432.908 207.853 432.506 205.04L399.624 12.4528C399.423 11.85 399.323 11.1468 399.323 10.3431C399.323 8.73565 399.926 7.32917 401.133 6.12362C402.541 4.71713 404.049 4.01389 405.658 4.01389H443.064C448.695 4.01389 451.812 6.22407 452.415 10.6444L472.024 128.186L493.743 58.8667C495.956 53.4417 499.274 50.7292 503.698 50.7292H525.418C530.446 50.7292 533.764 53.4417 535.373 58.8667L557.093 128.186L576.701 10.6444C577.304 6.22407 580.421 4.01389 586.052 4.01389H623.459C625.269 4.01389 626.777 4.71713 627.984 6.12362C629.391 7.32917 630.095 8.73565 630.095 10.3431L629.794 12.4528L596.912 205.04C596.51 207.853 595.203 210.264 592.991 212.274C590.98 214.082 588.365 214.986 585.147 214.986H556.489C553.272 214.986 550.758 214.182 548.948 212.575C547.138 210.968 545.831 209.159 545.026 207.15L514.558 120.953L484.09 207.15C482.28 212.374 478.56 214.986 472.929 214.986H444.271ZM738.739 218C719.633 218 703.243 215.187 689.568 209.561C675.892 203.935 665.535 196.601 658.496 187.56C651.659 178.317 648.039 168.271 647.636 157.421C647.636 155.813 648.24 154.407 649.446 153.201C650.854 151.795 652.463 151.092 654.273 151.092H692.283C694.696 151.092 696.606 151.594 698.014 152.599C699.623 153.402 701.232 154.708 702.841 156.517C705.455 161.741 709.679 166.061 715.511 169.476C721.343 172.892 729.086 174.6 738.739 174.6C750.202 174.6 758.95 172.792 764.983 169.175C771.017 165.558 774.033 160.636 774.033 154.407C774.033 149.987 772.424 146.37 769.207 143.557C766.19 140.744 761.363 138.232 754.727 136.022C748.09 133.812 738.236 131.3 725.164 128.487C701.031 123.464 682.931 116.131 670.865 106.486C658.999 96.6407 653.066 82.6764 653.066 64.5931C653.066 52.3366 656.485 41.3861 663.323 31.7417C670.161 22.0972 679.914 14.5625 692.584 9.1375C705.254 3.7125 720.036 1 736.929 1C754.425 1 769.609 4.01389 782.48 10.0417C795.351 16.0694 805.105 23.7046 811.741 32.9472C818.579 41.9889 822.199 50.9301 822.601 59.7708C822.601 61.5792 821.998 63.0861 820.791 64.2917C819.585 65.4972 818.076 66.1 816.266 66.1H776.447C774.033 66.1 772.022 65.6981 770.413 64.8944C769.006 64.0907 767.698 62.7847 766.492 60.9764C765.285 56.3551 761.967 52.437 756.537 49.2222C751.308 46.0074 744.772 44.4 736.929 44.4C727.879 44.4 720.941 46.0074 716.114 49.2222C711.287 52.437 708.874 57.1588 708.874 63.3875C708.874 67.6069 710.181 71.1231 712.796 73.9361C715.611 76.7491 720.036 79.3611 726.069 81.7722C732.303 83.9824 741.152 86.2931 752.615 88.7042C771.318 92.1199 786.2 96.4398 797.261 101.664C808.524 106.687 816.769 113.318 821.998 121.556C827.227 129.593 829.841 139.739 829.841 151.996C829.841 165.458 825.919 177.212 818.076 187.258C810.434 197.104 799.675 204.739 785.798 210.164C772.123 215.388 756.436 218 738.739 218ZM913.001 214.986C906.566 214.986 902.443 211.972 900.633 205.944L839.094 13.0556L838.49 10.3431C838.49 8.73565 839.094 7.32917 840.3 6.12362C841.708 4.71713 843.317 4.01389 845.127 4.01389H882.533C885.349 4.01389 887.661 4.81759 889.471 6.425C891.483 8.03241 892.79 9.84075 893.393 11.85L936.229 151.092L978.764 11.85C979.367 9.84075 980.574 8.03241 982.384 6.425C984.395 4.81759 986.808 4.01389 989.624 4.01389H1027.33C1028.94 4.01389 1030.35 4.71713 1031.55 6.12362C1032.96 7.32917 1033.67 8.73565 1033.67 10.3431L1033.06 13.0556L971.524 205.944C969.714 211.972 965.591 214.986 959.156 214.986H913.001ZM1141.33 218C1112.97 218 1090.65 211.068 1074.36 197.204C1058.07 183.34 1049.42 162.946 1048.42 136.022C1048.22 130.195 1048.12 121.556 1048.12 110.103C1048.12 98.4491 1048.22 89.7088 1048.42 83.8819C1049.42 57.3597 1058.17 36.9657 1074.66 22.7C1091.35 8.23334 1113.58 1 1141.33 1C1169.08 1 1191.31 8.23334 1208 22.7C1224.69 36.9657 1233.44 57.3597 1234.24 83.8819C1234.64 95.5356 1234.85 104.276 1234.85 110.103C1234.85 115.729 1234.64 124.369 1234.24 136.022C1233.24 162.946 1224.59 183.34 1208.3 197.204C1192.01 211.068 1169.69 218 1141.33 218ZM1141.33 174.6C1152.39 174.6 1161.14 171.285 1167.57 164.654C1174.21 158.024 1177.73 147.877 1178.13 134.214C1178.53 122.56 1178.74 114.322 1178.74 109.5C1178.74 104.276 1178.53 96.038 1178.13 84.7861C1177.73 71.1232 1174.21 60.9764 1167.57 54.3458C1160.94 47.7153 1152.19 44.4 1141.33 44.4C1130.47 44.4 1121.72 47.7153 1115.08 54.3458C1108.65 60.9764 1105.13 71.1232 1104.53 84.7861C1104.33 90.412 1104.22 98.65 1104.22 109.5C1104.22 120.149 1104.33 128.387 1104.53 134.214C1105.13 147.877 1108.65 158.024 1115.08 164.654C1121.52 171.285 1130.27 174.6 1141.33 174.6ZM1277.35 214.986C1275.34 214.986 1273.53 214.283 1271.92 212.876C1270.52 211.269 1269.81 209.461 1269.81 207.451V11.5486C1269.81 9.33843 1270.52 7.53009 1271.92 6.12362C1273.53 4.71713 1275.34 4.01389 1277.35 4.01389H1317.17C1319.39 4.01389 1321.2 4.71713 1322.6 6.12362C1324.01 7.53009 1324.71 9.33843 1324.71 11.5486V169.476H1416.12C1418.33 169.476 1420.14 170.28 1421.55 171.887C1422.96 173.294 1423.66 175.102 1423.66 177.312V207.451C1423.66 209.461 1422.96 211.269 1421.55 212.876C1420.14 214.283 1418.33 214.986 1416.12 214.986H1277.35ZM1471.4 214.986C1469.39 214.986 1467.58 214.283 1465.97 212.876C1464.56 211.269 1463.86 209.461 1463.86 207.451V51.3319H1410.16C1408.15 51.3319 1406.34 50.6287 1404.73 49.2222C1403.33 47.6148 1402.62 45.8065 1402.62 43.7972V11.5486C1402.62 9.33843 1403.33 7.53009 1404.73 6.12362C1406.34 4.71713 1408.15 4.01389 1410.16 4.01389H1572.46C1574.67 4.01389 1576.48 4.71713 1577.89 6.12362C1579.3 7.53009 1580 9.33843 1580 11.5486V43.7972C1580 46.0074 1579.3 47.8157 1577.89 49.2222C1576.48 50.6287 1574.67 51.3319 1572.46 51.3319H1518.76V207.451C1518.76 209.461 1518.06 211.269 1516.65 212.876C1515.24 214.283 1513.43 214.986 1511.22 214.986H1471.4Z"
                stroke="#F63C25" stroke-opacity="0.4" stroke-width="3" mask="url(#path-1-outside-1)" />
        </svg>
        <div class='preloader'>
            <div class='diamond'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class='movement'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>);
}

export default Loader;