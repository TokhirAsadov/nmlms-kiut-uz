package uz.yeoju.yeoju_app.entity.uquvbulim;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DtoForUpdatePermissionForTeacherGrading {
    private String id;
    private String teacherId;
    private String status;
    private Date deadline;

    public DtoForUpdatePermissionForTeacherGrading(String teacherId, String status, Date deadline) {
        this.teacherId = teacherId;
        this.status = status;
        this.deadline = deadline;
    }
}
