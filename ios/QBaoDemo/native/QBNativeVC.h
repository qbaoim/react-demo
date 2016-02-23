//
//  QBNativeVC.h
//  QBaoDemo
//
//  Created by fengsh on 16/2/19.
//  Copyright © 2016年 Facebook. All rights reserved.
//
//   哎。使用这种方式包装VC不行，行不通。。。。。。。
//

#import <UIKit/UIKit.h>

#import "RCTViewManager.h"

#import "QBMeVC.h"

@interface QBNativeVC : RCTViewManager
@property (nonatomic,strong)  QBMeVC *vc ;
@end
