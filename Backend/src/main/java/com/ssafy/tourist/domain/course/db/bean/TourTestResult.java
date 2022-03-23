package com.ssafy.tourist.domain.course.db.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TourTestResult {
    private int tourTestId;
    private String tourTestName;
    private Long tourTestCount;
}
